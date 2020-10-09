export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f7fd1eae274615510e7ea5f',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-bzetg24e',
                  apiId: 'd0a5d53e-1deb-4571-90d1-fd57ad3492d5'
                },
                {
                  buildHookId: '5f7fd1ea123e52427372e112',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-equvs9rt',
                  apiId: '6a2a29cb-740f-4516-8d9e-08d26ea3f5cd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/remdes/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-equvs9rt.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
