export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Guk blog',
        },
        {
            name: 'url',
            type: 'slug',
            title: 'url blog',
            options:{
                source: 'title',
            }
        },
        {
            name:'titleimg',
            type:'image',
            title:'Title',
        },
        {
            name:'des',
            type: 'text',
            title: 'Des',
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                {
                    type: 'block',
                },
            ],
        },
    ],
}