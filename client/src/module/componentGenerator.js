/**
 * Generate a Component with given data
 * @param {Function} Component - JSX Function
 * @param {String} key - key used for JSX component
 * @param {Object} [props] - Contain prop name and their value
 * @param {Function} [callback] - Must return props object
 * @return Completed JSX Component
 */
async function componentGenerator(Component, key = null, props = null, callback = null) {
    const callbackData = callback ? await callback() : null;
    return <Component key={key} {...props} {...callbackData}/>
}

/**
 * Generate list of a same component with given data
 * @param {Function} Component - JSX Function
 * @param {String} keyName - prefix for list JSX Component's key
 * @param {Function} callback - Must have return list props object for component
 * @return List completed JSX Component
 */
async function generateListComponents(Component, keyName = null, callback = null) {
    const listComponents = [];
    let listProps = await callback();
    listProps = listProps ? listProps : []
    listProps.forEach((props, index) => {
        listComponents.push(<Component key={keyName + "_" + index} {...props}/>)
    })
    return listComponents
}

export {
    componentGenerator,
    generateListComponents
}