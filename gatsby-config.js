module.exports = {
    siteMetadata: {
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Stéphane Klein, Software Craftsman, Full Stack Developer, Devops Engineer',
                short_name: 'Stéphane Klein - Resume',
                start_url: '/',
                background_color: 'white',
                theme_color: 'black',
                display: 'standalone',
                icon: 'src/images/avatar-stephane-klein.jpg',
                include_favicon: true
            }
        }
    ]
};
