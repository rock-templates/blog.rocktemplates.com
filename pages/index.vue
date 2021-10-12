<template>
  <div>
    <!-- START HEADER -->
    <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div class="flex justify-between items-center py-10">
        <div>
          <a aria-label="Blog" href="/">
            <img src="/img/rocktemplates-logo.svg" width="200" />
          </a>
        </div>
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
      <div class="divide-y divide-gray-200">
        <div class="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1
            class="text-xl font-extrabold text-gray-900 tracking-tight sm:text-4xl md:text-[4rem] md:leading-[3.5rem]"
          >Latest</h1>
          <p
            class="text-lg text-gray-500"
          >All the latest Rock Templates news, straight from the backstage.</p>
        </div>
      </div>
      <ul class="divide-y divide-gray-200">
        <li v-for="article of articles" :key="article.slug" class="py-12">
          <div class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
            <dl>
              <dt class="sr-only">Published on</dt>
              <dd class="text-base font-medium text-gray-500">{{ formatDate(article.createdAt) }}</dd>
            </dl>
            <div class="space-y-5 xl:col-span-3">
              <div class="space-y-6">
                <h2 class="text-2xl font-bold tracking-tight">
                  <NuxtLink
                    :to="{ name: 'blog-slug', params: { slug: article.slug } }"
                    class="text-grey-900"
                  >{{ article.title }}</NuxtLink>
                </h2>
                <div class="prose max-w-none text-gray-500">{{ article.description }}</div>
              </div>

              <div class="text-base font-medium">
                <NuxtLink
                  :to="{ name: 'blog-slug', params: { slug: article.slug } }"
                  class="text-teal-600 hover:text-teal-700"
                >Read more &rarr;</NuxtLink>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- END CONTENT -->
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'author', 'createdAt'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles
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
