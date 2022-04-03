import sanityClient from '@sanity/client';


export const client = sanityClient({
    projectId: '9inissq2',
    dataset: 'production',
    apiVersion: 'v1',
    token: "sk34I9HR0ktFJbEUf96WXr8wmyMjXRoBrIakIg5u5oMcJpaaVSfDtQjrio7o3QgwtMcSXO3s6gL8ZWldLtUGmyblMK7SI1sx8PeVOrJEwh7ojLBXnfLUdWYbL3zNwxLZDwabDwz5JeIUhVB6l7mS6lYKkWbllX5vmOZF3YZsnSa2cGuIr9JK",
    useCdn: false,
})