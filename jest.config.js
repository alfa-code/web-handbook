module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        "^Src(.*)$": "<rootDir>/src$1",
        "^Components(.*)$": "<rootDir>/src/client/components$1",
        "^Containers(.*)$": "<rootDir>/src/client/containers$1",
        "^Constants(.*)$": "<rootDir>/src/constants$1",
        "^Assets(.*)$": "<rootDir>/src/assets$1",
        "^Fonts(.*)$": "<rootDir>/src/fonts$1",
        "^Blocks(.*)$": "<rootDir>/src/client/blocks$1",
        "^Forms(.*)$": "<rootDir>/src/client/forms$1",
        "^Pages(.*)$": "<rootDir>/src/client/pages$1",
        "^Actions(.*)$": "<rootDir>/src/client/blocks$1",
        "^Blocks(.*)$": "<rootDir>/src/actions$1",
        "^Reducers(.*)$": "<rootDir>/src/reducers$1",
        "^Selectors(.*)$": "<rootDir>/src/selectors$1",
        "^Types(.*)$": "<rootDir>/src/types$1",
        "^Utils(.*)$": "<rootDir>/src/utils$1",
    }
};
