<template>
    <ContentDoc path="/test"></ContentDoc>
    <iframe src="https://onedrive.live.com/embed?cid=75C4EE0D953FFAF6&resid=75C4EE0D953FFAF6%211065&authkey=AMAuk_F1CthdSSQ" width="98" height="120" frameborder="0" scrolling="no"></iframe>    <ContentList v-slot="{ list }">
        <div v-for="article in list" :key="article._path">
            <h1>Title:{{ article.title }}</h1>
            <p>Description:{{ article.description }}</p>
        </div>
    </ContentList>
    <NuxtWelcome></NuxtWelcome>
</template>

<script>
export default {
    name: "index"
}
</script>

<style scoped>

</style>