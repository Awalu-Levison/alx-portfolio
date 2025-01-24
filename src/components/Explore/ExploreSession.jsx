/* eslint-disable react/prop-types */

export default function ExploreSession({title, children, ...props}) {
    return <section {...props}>
        <h2>{title}</h2>
        {children}
    </section>
}