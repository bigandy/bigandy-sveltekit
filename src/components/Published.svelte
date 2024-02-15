<script>
    export let date;

    const publishedDate = new Date(date).toLocaleDateString()
</script>

<p>Published: {publishedDate}</p>