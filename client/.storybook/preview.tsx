import type { Preview } from "@storybook/react";
import { ThemeProvider, CssBaseline } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import theme from '../ui-library/theme/theme';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            default: 'cream',
            values: [
                {
                    name: 'cream',
                    value: '#faf8f3',
                },
                {
                    name: 'white',
                    value: '#ffffff',
                },
            ],
        },
    },
    decorators: [
        withThemeFromJSXProvider({
            themes: {
                light: theme,
            },
            defaultTheme: 'light',
            Provider: ThemeProvider,
            GlobalStyles: CssBaseline,
        }),
    ],
};

export default preview;
