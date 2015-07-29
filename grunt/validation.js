module.exports = function (grunt, options) {
    return {
        options: {
            reset: grunt.option('reset') || true,
            stoponerror: false,
            serverUrl: 'http://w3c.devnet.nil/w3c-validator/check',
            generateReport: false,
            path: 'log/validation-status.json',
            reportpath: false,
            failHard: true
        },

        file: {
            files: {
                src: [
                    'html/*.html'
                ]
            }
        },

        ci_file: {
            options: {
                generateReport: true,
                errorHTMLRootDir: 'log',
                useTimeStamp: false,
                errorTemplate: 'config/dw_validation_error_template.html'
            },
            files: {
                src: [
                    'html/*.html'
                ]
            }
        },

        url: {
            options: {
                remotePath: 'https://www.denkwerk.com',
                remoteFiles: [
                    '/', '/de/denkwerk/', '/de/projekt/', '/category/de/jobs/',
                    '/category/de/allgemein/', '/de/timeline/', '/de/kontakt/'
                ]
            },
            files: {
                src: []
            }
        },

        ci_url: {
            options: {
                serverUrl: 'http://w3c.devnet.nil/w3c-validator/check',
                remotePath: 'https://www.denkwerk.com',
                remoteFiles: [
                    '/', '/de/denkwerk/', '/de/projekt/', '/category/de/jobs/',
                    '/category/de/allgemein/', '/de/timeline/', '/de/kontakt/'
                ],
                generateReport: true,
                errorHTMLRootDir: 'log',
                useTimeStamp: false,
                errorTemplate: 'config/dw_validation_error_template.html'
            },
            files: {
                src: []
            }
        }
    };
};
