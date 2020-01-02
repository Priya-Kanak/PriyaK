$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/Test.feature");
formatter.feature({
  "line": 1,
  "name": "Test Get/Post Method of Rest REST API",
  "description": "",
  "id": "test-get/post-method-of-rest-rest-api",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Sample Get Method",
  "description": "",
  "id": "test-get/post-method-of-rest-rest-api;sample-get-method",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I set base url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "i hit get request",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I validate success response",
  "keyword": "Then "
});
formatter.match({
  "location": "TeststepDefibition.i_set_base_url()"
});
formatter.result({
  "duration": 153361300,
  "status": "passed"
});
formatter.match({
  "location": "TeststepDefibition.i_hit_get_request()"
});
formatter.result({
  "duration": 5150748000,
  "status": "passed"
});
formatter.match({
  "location": "TeststepDefibition.i_validate_success_response()"
});
formatter.result({
  "duration": 37579100,
  "status": "passed"
});
});