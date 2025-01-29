import { test, expect } from '@playwright/test';
import { login } from './modules/login';
import { navigateToSection } from './modules/navigate';
import { verifyTask } from './modules/verification';
import testCases from './data/test-data.json';

/* Test Suite: Asana Login
Test Case 1
●	Login to Demo App.
●	Navigate to "Web Application."
●	Verify "Implement user authentication" is in the "To Do" column.
●	Confirm tags: "Feature" "High Priority”

Test Case 2
●	Login to Demo App.
●	Navigate to "Web Application."
●	Verify "Fix navigation bug" is in the "To Do" column.
●	Confirm tags: "Bug"

Test Case 3
●	Login to Demo App.
●	Navigate to "Web Application."
●	Verify "Design system updates" is in the "In Progress" column.
●	Confirm tags: "Design”

Test Case 4
●	Login to Demo App.
●	Navigate to "Mobile Application."
●	Verify "Push notification system" is in the "To Do" column.
●	Confirm tags: "Feature”

Test Case 5
●	Login to Demo App.
●	Navigate to "Mobile Application."
●	Verify "Offline mode" is in the "In Progress" column.
●	Confirm tags: "Feature" & "High Priority”

Test Case 6
●	Login to Demo App.
●	Navigate to "Mobile Application."
●	Verify "App icon design" is in the "Done" column.
●	Confirm tags: "Design”

*/

// Run Test Cases
for (const testCase of testCases) {
    test(`Verify task for ${testCase.task} in ${testCase.section}`, async ({ page }) => {
        await login(page);
        await navigateToSection(page, testCase.section);
        await verifyTask(page, testCase.task, testCase.column, testCase.tags);
    });
}
