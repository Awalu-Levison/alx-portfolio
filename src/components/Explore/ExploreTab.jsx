/* eslint-disable react/prop-types */
export default function ExploreTab({children, buttons }) {
    return <>
    <menu>
        {buttons}
    </menu>
    {children}

    </>
}