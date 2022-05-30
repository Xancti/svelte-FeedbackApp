import { writable } from "svelte/store";

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 2,
        text: 'Super great, had such a fun time!',
        waiter: 'Rebecca'
    },
        {
        id: 2,
        rating: 9,
        text: 'Oh my gosh, I never knew such a place existed! I have to tell my friends now.',
        waiter: 'Uncy'
    },
        {
        id: 3,
        rating: 7,
        text: 'Great place for supper, waiter was a bit frustrating though.',
        waiter: 'Patrick'
    }
])