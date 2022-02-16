/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    
    preset: "ts-jest",
    testEnvironment: "node",
    //testMatch: ["dist/test/*.test.ts"],
    //testMatch: ["**/**/*.test.ts"],
    //testMatch: ["**/__dist__/__test__/*.test.ts"],
    verbose: true,
    forceExit: true,
    clearMocks: true,
    resetMocks: true,
    restoreMocks: true,
  };