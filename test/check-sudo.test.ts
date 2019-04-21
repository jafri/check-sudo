import { checkSudo } from "../src/check-sudo"

/**
 * Full test
 */
describe("Full Test", () => {
  it("Not sudo", async () => {
    const isSudo = await checkSudo()
    expect(isSudo).toBeFalsy()
  }, 10000)
})
