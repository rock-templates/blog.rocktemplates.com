<script>

import getSiteMeta from "~/utils/getSiteMeta"

export default {
    async asyncData({ $content, params }) {
        const article = await $content('articles', params.slug).fetch()

        const [prev, next] = await $content('articles')
            .only(['title', 'slug', 'createdAt'])
            .sortBy('createdAt', 'asc')
            .surround(params.slug)
            .fetch()

        return {
            article,
            prev,
            next
        }
    },
    head() {
        return {
            title: this.article.title,
            meta: [
                ...this.meta,
                {
                    property: "article:published_time",
                    content: this.article.createdAt,
                },
                {
                    property: "article:modified_time",
                    content: this.article.updatedAt,
                },
                {
                    property: "article:tag",
                    content: this.article.tags ? this.article.tags.toString() : "",
                }
            ],
            link: [
                {
                    hid: "canonical",
                    rel: "canonical",
                    href: `https://blog.rocktemplated.com/blog/articles/${this.$route.params.slug}`,
                }
            ]
        }
    },
    computed: {
        meta() {
            const metaData = {
                type: "article",
                title: this.article.title,
                description: this.article.description,
                url: "https://blog.rocktemplates.com/blog/articles/" + this.$route.params.slug,
                mainImage: this.article.img
            };
            return getSiteMeta(metaData);
        }
    },
    methods: {
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('en', options)
        }
    }
}
</script>

<template>
    <div>
        <!-- START HEADER -->
        <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <div class="flex justify-between items-center py-10">
                <a aria-label="Blog" href="/">
                    <img src="/img/rocktemplates-logo.svg" width="200" />
                </a>
                <div class="text-base leading-5">
                    <a
                        href="https://docs.rocktemplates.com"
                        class="font-medium text-gray-500 hover:text-gray-700"
                    >Documentation &rarr;</a>
                </div>
            </div>
        </div>
        <!-- END HEADER -->

        <!-- START CONTENT -->
        <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <div class="pt-6 xl:pb-10">
                <div class="space-y-1 text-center">
                    <dl class="space-y-10">
                        <div>
                            <dt class="sr-only">Published on</dt>
                            <dd
                                class="text-base leading-6 font-medium text-gray-500"
                            >{{ formatDate(article.createdAt) }}</dd>
                        </div>
                    </dl>
                    <div>
                        <h1
                            class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-4xl md:text-5xl md:leading-[3.5rem]"
                        >{{ article.title }}</h1>
                    </div>
                </div>
            </div>

            <div
                class="divide-y xl:divide-y-0 divide-gray-200 xl:grid xl:grid-cols-4 xl:gap-x-6 pb-16 xl:pb-20"
            >
                <dl class="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200">
                    <dt class="sr-only">Authors</dt>
                    <dd>
                        <ul
                            class="flex justify-center xl:block space-x-8 sm:space-x-12 xl:space-x-0 xl:space-y-8"
                        >
                            <li class="flex items-center space-x-2">
                                <img
                                    src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=10&q=80"
                                    alt
                                    class="w-10 h-10 rounded-full"
                                />
                                <dl class="text-sm font-medium whitespace-no-wrap">
                                    <dt class="sr-only">Erno Vuori</dt>
                                    <dd class="text-gray-900">Erno Vuori</dd>
                                    <dt class="sr-only">Twitter</dt>
                                    <dd>
                                        <a
                                            href="https://twitter.com/evuori"
                                            class="text-teal-600 hover:text-teal-700"
                                        >@evuori</a>
                                    </dd>
                                </dl>
                            </li>
                        </ul>
                    </dd>
                </dl>
                <div class="divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2">
                    <div class="max-w-none pt-10 pb-8">
                        <nuxt-content :document="article" class="prose" />
                    </div>
                </div>
            </div>
        </div>
        <!-- END CONTENT -->
    </div>
</template>