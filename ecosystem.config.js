module.exports = {
    apps: [{
        name: 'CostShipping',
        script: './server/server.js'
    }],
    deploy: {
        production: {
            user: 'ubuntu',
            host: 'ec2-18-222-159-86.us-east-2.compute.amazonaws.com',
            key: '~/.ssh/CostShipping.pem',
            ref: 'origin/master',
            repo: 'git@github.com:bestbuyclone/CostShippingProtection.git',
            path: '/home/ubuntu/CostShipping',
            'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
        }
    }
}