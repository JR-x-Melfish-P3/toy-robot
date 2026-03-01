import { test, expect } from '@playwright/test'

test.describe('Toy Robot Simulator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('robot is not placed on initial load', async ({ page }) => {
    await expect(page.getByRole('img', { name: 'robot' })).not.toBeVisible()
    await expect(page.getByRole('status', { name: 'robot status' })).toContainText('Not placed')
    await expect(page.getByRole('button', { name: 'Move' })).toBeDisabled()
    await expect(page.getByRole('button', { name: 'Turn Left' })).toBeDisabled()
    await expect(page.getByRole('button', { name: 'Turn Right' })).toBeDisabled()
  })

  test('critical path: place → move → boundary → rotate', async ({ page }) => {
    const status = page.getByRole('status', { name: 'robot status' })

    // Place robot at (2, 2, NORTH)
    await page.getByLabel('X').fill('2')
    await page.getByLabel('Y').fill('2')
    await page.getByLabel('Direction').selectOption('NORTH')
    await page.getByRole('button', { name: 'Place' }).click()

    await expect(page.getByRole('img', { name: 'robot' })).toBeVisible()
    await expect(status).toContainText('X: 2')
    await expect(status).toContainText('Y: 2')
    await expect(status).toContainText('NORTH')

    // Move enables after placement
    await expect(page.getByRole('button', { name: 'Move' })).toBeEnabled()

    // Move once → (2, 3, NORTH)
    await page.getByRole('button', { name: 'Move' }).click()
    await expect(status).toContainText('Y: 3')

    // Move again → (2, 4, NORTH)
    await page.getByRole('button', { name: 'Move' }).click()
    await expect(status).toContainText('Y: 4')

    // Move at north boundary → position unchanged (2, 4, NORTH)
    await page.getByRole('button', { name: 'Move' }).click()
    await expect(status).toContainText('Y: 4')
    await expect(status).toContainText('NORTH')

    // Turn Left → WEST
    await page.getByRole('button', { name: 'Turn Left' }).click()
    await expect(status).toContainText('WEST')
  })

  test('robot can be re-placed at a new position', async ({ page }) => {
    const status = page.getByRole('status', { name: 'robot status' })

    // Place at (0, 0)
    await page.getByLabel('X').fill('0')
    await page.getByLabel('Y').fill('0')
    await page.getByRole('button', { name: 'Place' }).click()
    await expect(status).toContainText('X: 0')
    await expect(status).toContainText('Y: 0')

    // Re-place at (4, 4, SOUTH)
    await page.getByLabel('X').fill('4')
    await page.getByLabel('Y').fill('4')
    await page.getByLabel('Direction').selectOption('SOUTH')
    await page.getByRole('button', { name: 'Place' }).click()
    await expect(status).toContainText('X: 4')
    await expect(status).toContainText('Y: 4')
    await expect(status).toContainText('SOUTH')
  })
})
