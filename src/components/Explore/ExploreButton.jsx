/* eslint-disable react/prop-types */
export default function ExploreButton({children, isSelected, ...props}) {

    return(
        <li>
            {/* you can dynamically style a button or an element from the inside using classname and passing the values as props
            passed the values "isSelected as props then use teneray operator after that go to the app.jsx and render it" */}
            <button className={isSelected ? 'active' : undefined} {...props} >{children}</button>
        </li>
    )
}