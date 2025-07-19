Feature: Media API Testing

  Scenario: Validate response code and timing
    Given I send a GET request to the media API
    Then the response code should be 200
    And the response time should be below 1000 ms

  Scenario: Validate data in media list
    Given I send a GET request to the media API
    Then all items should have a non-empty id
    And only one item should have "now_playing" offset as true

  Scenario: Validate response headers
    Given I send a GET request to the media API
    Then the response should contain a Date header


  Scenario: Validate total number of media items
    Given I send a GET request to the media API
    Then the response should contain 14 items

  Scenario: Invalid endpoint returns 404
    Given I send a GET request to mediax
    Then the response code should be 404

  Scenario: More than one now_playing should fail
    Given I send a GET request to the media API
    Then there should be only one item with now_playing true

