import { useRef, useState, useLayoutEffect, useEffect } from "react"

const useMountEffect = fun => useEffect(fun, [])
const handleKeyPress = callback => event => {
    if (event.key === "Escape" || event.keyCode === 27) {
        callback(event)
    }
}
const getElementMargin = el => {
    const style = window.getComputedStyle(el)
    const leftMargin = parseInt(style.marginLeft.split("px")[0])
    const rightMargin = parseInt(style.marginLeft.split("px")[0])
    return leftMargin + rightMargin
}

// Source: https://stackoverflow.com/a/56644506
export const useOnOutsideEvent = handleOutsideClick => {
    const innerBorderRef = useRef()

    const onClick = event => {
        if (
            innerBorderRef.current &&
            !innerBorderRef.current.contains(event.target)
        ) {
            handleOutsideClick()
        }
    }

    useMountEffect(() => {
        document.addEventListener("click", onClick, false)
        document.addEventListener("keydown", handleKeyPress(onClick))
        return () => {
            document.removeEventListener("click", onClick, false)
            document.removeEventListener("keydown", handleKeyPress(onClick))
        }
    })

    return { innerBorderRef }
}

export const useResponsiveMenu = ({
    containerRef,
    menuItems,
    spaceForMoreLink = 50,
}) => {
    const [menu, setMenu] = useState({ visibleItems: menuItems, hiddenItems: [] })

    useLayoutEffect(() => {
        const handleResize = () => {
            setMenu({ visibleItems: menuItems, hiddenItems: [] })

            const { offsetWidth: containerWidth } = containerRef.current

            console.log("containerWidth " + containerWidth)
            // Reserve space for "More" (...) button
            const maxWidth = containerWidth
            console.log("maxWidth " + maxWidth.toFixed(2))

            const items = containerRef.current.children
            // We assume menu items to share the same margins
            const itemMargin = getElementMargin(items[0])
            console.log("itemMargin " + itemMargin)

            const { offsetWidth: lastItemWidth } = items[items.length - 1]
            console.log("lastItemWidth " + lastItemWidth)
            const canLastItemFit = lastItemWidth <= spaceForMoreLink ? true : false

            console.log("canLastItemFit " + canLastItemFit)

            const menuResult = Array.from(items).reduce(
                (result, menuItem) => {
                    result.cumulativeWidth += menuItem.offsetWidth + itemMargin
                    console.log("result.cumulativeWidth " + result.cumulativeWidth.toFixed(2))

                    if (result.cumulativeWidth <= maxWidth) {
                        result.visibleItems.push({
                            text: menuItem.text,
                            path: menuItem.getAttribute("href"),
                        })
                        console.log("VISIBLE menuItem.text " + menuItem.text)
                    }
                    else {
                        result.hiddenItems.push({
                            text: menuItem.text,
                            path: menuItem.getAttribute("href"),
                        })
                        console.log("HIDDEN menuItem.text " + menuItem.text)
                    }
                    return result
                },
                {
                    cumulativeWidth: 0,
                    offset: containerRef.current.getBoundingClientRect().height,
                    visibleItems: [],
                    hiddenItems: [],
                }
            )

            const { visibleItems, hiddenItems, offset } = menuResult

            // Check can we swap the "more" button with the only hidden item
            if (hiddenItems.length === 1 && canLastItemFit) {
                visibleItems.push(hiddenItems.pop())
            }

            setMenu({ visibleItems, hiddenItems, offset })
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [containerRef])

    return { menu }
}