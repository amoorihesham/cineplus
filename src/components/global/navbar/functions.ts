export const dropdownToggle = (dropdownRef: HTMLDivElement | null) => {
    if (dropdownRef?.classList.contains('hidden')) {
        dropdownRef?.classList.add('block')
        dropdownRef?.classList.remove('hidden')
    } else {
        dropdownRef?.classList.remove('block')
        dropdownRef?.classList.add('hidden')
    }

}