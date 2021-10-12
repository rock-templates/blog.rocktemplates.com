const type = "website";
const url = "https://rocktemplates.com";
const title = "Templates with quality, attitude and style";
const description = "Build your next application with professional designed pre-made components";
const mainImage = "https://images.unsplash.com/photo-1554222725-5cd0bf9c6da9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80";

export default (meta) => {
    return [
        {
            hid: "description",
            name: "description",
            content: (meta && meta.description) || description,
        },
        {
            hid: "og:type",
            property: "og:type",
            content: (meta && meta.type) || type,
        },
        {
            hid: "og:url",
            property: "og:url",
            content: (meta && meta.url) || url,
        },
        {
            hid: "og:title",
            property: "og:title",
            content: (meta && meta.title) || title,
        },
        {
            hid: "og:description",
            property: "og:description",
            content: (meta && meta.description) || description,
        },
        {
            hid: "og:image",
            property: "og:image",
            content: (meta && meta.mainImage) || mainImage,
        },
        {
            hid: "twitter:url",
            name: "twitter:url",
            content: (meta && meta.url) || url,
        },
        {
            hid: "twitter:title",
            name: "twitter:title",
            content: (meta && meta.title) || title,
        },
        {
            hid: "twitter:description",
            name: "twitter:description",
            content: (meta && meta.description) || description,
        },
        {
            hid: "twitter:image",
            name: "twitter:image",
            content: (meta && meta.mainImage) || mainImage,
        },
    ];
};