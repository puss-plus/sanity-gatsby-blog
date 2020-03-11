export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e68d5ea09cfa27cdadf4765',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-84zfxd7z',
                  apiId: 'b6f0f088-4a91-4ece-87dd-67eb4cc359f8'
                },
                {
                  buildHookId: '5e68d5eb157560852cedef2f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-rve1uh9n',
                  apiId: '6872e50e-f2d1-4125-b513-828b266577e9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/puss-plus/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-rve1uh9n.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
