export default ({as, children}) => {
    const Component = as
    return (
        <Component className="ui-button">{children}</Component>
    )
}
