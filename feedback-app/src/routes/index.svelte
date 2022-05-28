<script>
    import FeedbackList from '../lib/FeedbackList.svelte';
    import FeedbackStats from '../lib/FeedbackStats.svelte';
    import FeedbackForm from '../lib/FeedbackForm.svelte';

let feedback = [
        {
        id: 1,
        rating: 8,
        text: 'Super great, had such a fun time!'
    },
        {
        id: 2,
        rating: 9,
        text: 'Oh my gosh, I never knew such a place existed! I have to tell my friends now.'
    },
        {
        id: 3,
        rating: 7,
        text: 'Great place for supper, waiter was a bit frustrating though.'
    }
    ]

$: count = feedback.length
$: average = feedback.reduce((a, {rating}) => a + rating, 0) / count

const addFeedback = (e) => {
    const newFeedback = e.detail
    feedback = [newFeedback, ...feedback]
}

const deleteFeedback = (e) => {
    const itemId = e.detail
    feedback = feedback.filter((item) => item.id != itemId)
}

</script>
<main class=container>
    <FeedbackForm on:add-feedback={addFeedback}/>
    <FeedbackStats {count} {average} />
    <FeedbackList {feedback} on:delete-feedback={deleteFeedback}/>
</main>

<style>
</style>