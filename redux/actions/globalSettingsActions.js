export const Actions = {
   SET_THEME_LIGHT: 'SET_THEME_LIGHT',
   SET_THEME_DARK: 'SET_THEME_DARK',
   SET_THEME_SYSTEM: 'SET_THEME_SYSTEM'
}

export const setThemeDark = () => ({
   type: Actions.SET_THEME_DARK
});

export const setThemeLight = () => ({
   type: Actions.SET_THEME_LIGHT
});

export const setThemeSystem = () => ({
   type: Actions.SET_THEME_SYSTEM
});
