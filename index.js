
const htmlencode = require('htmlencode').htmlEncode
const content = require('./content')

const Content = function() {}

Content.addToHead = function(params) {
  const config = content[params.name] 
  return `
    ${config.head}
    <link rel="stylesheet" href="/static/jsav-vas/style/proficiency.css" type="text/css" />
    `
}

Content.addToBody = function(params) {
  const config = content[params.name] 
  return `
    ${config.body}
    <script src="/static/jsav-vas/exercises/${config.exercise_js}"></script>
  ` 
}

Content.initialize = function(req, params, handlers, cb) {
  // Initialize the content package
  params.headContent += Content.addToHead(params)
  params.bodyContent += Content.addToBody(params)

  cb()

}

Content.register = function(handlers) {
  handlers.contentPackages['jsav-vas'] = Content
  handlers.contentTypes.jsav.installedContentPackages.push(Content)
}

Content.namespace = 'jsav-vas'
Content.contentTypeNamespace = 'jsav'
Content.packageType = 'content'

Content.meta = {
  'name': 'jsav-vas',
  'shortDescription': 'Content package for JSAV VAS exercises',
  'description': '',
  'author': 'Giacomo Mariani',
  'license': 'MIT',
  'version': '0.0.1',
  'url': '',
  'teaserContent': [`insertion_sort`],
  'contents': content  
}

module.exports = Content
