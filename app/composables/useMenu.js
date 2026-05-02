export function useMenu() {
    const isMenuOpen = useState('menu', () => false);

    return {
        isMenuOpen,
    }
}
