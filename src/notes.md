# React
- JSX / TSX
    - TypeScript Xml-Extensions, This Compiles HTML + JS as XML Tags as Expressions

- Package.json
    - dependencies
        - All packaes required while running the aplication
        - npm install [PACKAGE-NAME] 
    - devDependencies
        - All packages required while developing, Building, and testing of the application
        - npm install --save-dev [PACKAGE-NAME]   
- tsconfig.json
    - file is created using the following command
        - tsc --init
    - tsconfig.app.json
        - Dev, Build
    - tsconfig.node.json
        - Runtime module loading
    - tsconfig.spec.json
        - used during Unit Testing     

- react
    - Basic Foundation Librarty
    - Component
        - Class Componants, old standard, the component was created using ES6+ Class
        - Functional Component
            - Component is created using function
        - Autonomous Object that has following:
            - UI
            - Data using Data Memebers
            - Behavior aka Methods
        - UI can be bound to data properties for Data Read/Write
        - UI Interactive Elements e.g. Button, can be bound with Methods using Events
        - Component uses Tsx for Compilation of TS Code, HTML Elements
        - Component is Reusable
        - Component can have 'State', aka a data that can define how component can behave, this is STATEFUL Component
        - Component may not have state, its is STATELESS Component
        - Component can have one-or-more children componet(s)
            - This is Composable UI
            - The state of parent can be floated to children
            - The child component can also send data to it parent  
        - Component has Lifecycle
            - Mount (LOAD) --> Event (UI Events) --> UnMount (UnLoad)
    - Component has state using following features
        - The 'props'
        - The use of 'useState' hook

- The React have introduced following changes in HTML Develipment
    - Intrinsic Elements
        - HTML: UI elements as JSX (aka XML Extension Rules for Compilation)
        - HTML attributes System is re-written
            - Data Attributes, used for binding data e.g. value, disabled, hidden, etc.
            - Event Attributes: onChange, onBulr, etc.
- ReactDOM
    - Package used for following
        - Mount the Component in root element of index.html using  'createRoot' object
- Functional component may accepts Parameter but not of Primiptive  type
    - Why?
        - The Component needs to be mounted on UI, so it can accept only 'props' type that represents inter component state object to set UI Generation or UI Behavior
        - What is 'props'?
            - An immutable object that is used to maintain state of data across parent-child components         

# React.js, the 'One-Way' Data Flow
- The Value can be send from UI to Component's Property or back based on an event but one-event at a time.
    - The 'State'
        - It is a data that is maintained by the currently loaded Component
        - This is Mutable, means the state will persist only when the component is mounted
        - React.FC
            - FC, the Functional Component
            - uses Hooks for Managing the State
- Hooks, it is a function, that is executed 'only-at-functional-component-level'
    - useState
        - The Component's Local Mutatble State
        - useState(intialValue, setAction<Dispatch>)
            - initialValue: The value for a data memebrs of component when the component is mounted
            - setAction<Dispatch>: A Callback funciton, that will be responsible to update / mutate the initialValue to new value. Dispatch, is he reason for Direct update of the state data members
    - useContext
        - A state that can be shared across components
        - The Parent can decide ti which child the state will be passed
        - WHereas the 'props' is available across all children
        - The 'createContext()' from 'react' is used to create a context
        - The 'Context' object is created / returned by the  'createContext()'
            - Provider
                - Used to Provide data from Parent to child using 'Context'
                - The 'values' property, used to pass the data from parent 
            - Consumer
                - Used to consume data from 'Context' in te Child Component
                - To Subscribe to  'Context', we must use 'useContext()' hook
    - useEffect
        - Manage the Side-Effect Execution in the component, when the component is performing a long-running operations
        - This is executed at component level in two-steps
            - Initiate the Long-Running operation during mounting 
            - Release all the external subscription(?) while unmounting
        - The case when the Component needs to be dependant on long-running process (Parent or Child), then the useEffect is responsible to decide wheather the state to be changed or not
        - This may update the 'state' of the component
        - DEPENDENCY-ARRAY: the array of state properties those are monitored for updates (state changes), once they are updated, the useEffect will stop
````typescript
useEffect(()=>{
    // Logic that will be executed during mounting
    // subscription to Global Events e.g. windows events for browser
    // Promise or async class subscription
    return ()=>{
        // Logic that is executed during UnMounting
        // unsubscribe to the Global Event 
        // unscribe to the async or promise
    }
},[DEPENDENCY-ARRAY]);
````
    - useReducer
    - useMemo
    - useCallback
    - useTransition

# User Input validations
- required, pattern, min, max, etc.
- HTML 5 = HTML Tag + Inline JavaScript + Inlice CSS
    - Validations are handled using 'onBlur' event of input element
    - onSubmit event of the form  
    - Inline CSSS, apply validation style on the input element
````html
<input type="text" pattern=[0-9] min=4 max=10 required>
````
- React Validator Libraries
    - React Validator (Out of Support)
    - Formik (Stable)
        - npm install formik
        - The 'Formik' component
            - initialValues
                - Initial values of the state properties
            - validationSchemas
                - The Object State Model that is bound to the UI Element e.g. ProductInfo object
            - validate
                - a Callback function for Custom validation
            - onSubmit
                - A Callback function taht is executed when Submit butten is clicked
            - onReset
                - A Callback function that is executed for resettin Form Value
            - validateOnBlur
                - A boolean, when set to trues, it will validate the UI elements when after change the state property user press TAB, or Lost the focus (blur) the UI element
        - The 'Field' component, that maps with the input:text element
            - name and id properties, this MUST match with the state property name
        - The 'Form' component, that maps with the HTM: form tag
        - The 'ErrorMessage' component
            - Generates the Error Message container component using its 'component' property, generally it is  'div'
        - The 'useFormik()' hook
            - useFormik({initialValues: {}m validationSchemas:{}, validateOnBlur:, onSubmit:()=>{}, onReset: ()=>{}})
                - use this hook if you do not want to use the Formik Component
                - use standard HTML element instead of Formik Components to handle validations
    - react-hook-form (latest)
    - yup
        - a library for defining validation rules on state properties
        - string(), number(), etc. function those represent type for the state property before the validation rules are applied
        - min(), max(), email(), required(), error(), etc. methods for validation rules and error messages
        - onFor()  for Comparision, Yup.ref() to refer the state property for comparision 

# Composable UI / Front-End Applications       
- Parent-Child Components
- Reusable Components
- State Sharing Across Component 
- Complex Composition
    - Single Page Application (SPA)
        - Routing Framework
        - React-Router-DOM 
    - State Management Across Multiple Components but they are separate from Each other  
        - JavaSCript Application State Management aka Global Session State for JS Applications
            - Redux
            - Redux + SAGA Middlewares
# React-Router-DOM
- npm install react-router-dom
    - BrowserRouter
        - ROute Container COmponent
            - Creates a DataContext to load the ROute Table and Query to it based on the 'path'
    - Routes
        - A Component that represents Route Table
        - This is present under the Browser ROuter
    - Route
        - A Component that has the Following Properties
            - 'path': The URL for the Component to Query
            - 'element': The Component that will be loaded when the 'path' query is executed
    - Link
        - A Component for defing the 'a' tag links for querying to Route Table
        - Properties
            - 'to', the navigation to takes place based on the path to the element
    - Outlet
        - USed in case of Child ROuting
        - A COmponent that is used to load a ROuttable for Child Components / nested components
    - useParams()
        - Hook for sunscribing and reading Route Parameters
        - This is object Literal
        - useParams({})
    - useNavigate()
        - A Hook forexplicit navigation
        - We can call this is a method to define explicit navigation based on the condition                     
# State Management Architecture by Facebook
- FLUX
    - React View Can have Multiple Stores
    - React Veiw Will Dispatch an Action (Input Action), This will execute a logic (Action Creator).
    - If the Action is Synchronous then the Output action with data will generate an output actions.
        - This Data will be mutated in the store so that other veiw can  query it
    - If an action creatr demanda an async logic then there will be seperate delegate for async calls thatnwill handle long running process
        - This Long running process will dispatch an output actions with data
        - This data will not be mutated in Store for other react views
- Redux
    - A Simplifcation  of FLUX to have a "SINGLE STORE" for all views
- Redux -Concepts
    - Store
        - Single Source of Truth
        - Has schemas for data that is an Applicatoin State
        - Views subscribes to the store to read the data
        - We have 'ONELy - ONE' store
        - All Views can read data from this store thats why it is global applicaiton state 
    - Action
        - What has happened?
        - Technically, an event that is raised (dispatched) by the view
        - The action can have an input parameter(s)
        - The action invoke a logic to process parameters
            - This is sync / async
        - The action can return output data, This is called as 'payload'
            - The pyload can be a view or complex object

    - Reducer      
        - How the data is mutated in store?
        - A 'Pure funciton', input and ouput parameters as same
        - Responsible to Mutate the store based on an action that is dispatched 

# Redux Object Model
- @reduxjs/toolkit
    - Hooks for the Redux app
        - useDispatch()
            - used to dispatch an action from the View
        - useSelector()
            - used to subscribe to the store from the View     
    - methods for Redux Object Model
        - configureStore({
            reducer:{

            }
            middlewares
        })
            - Used to create the Redux Store at Application Level
                - reducer: An oject that accepts all reducers those are responsible to update the state in the store
                - middlewares: These objects are responsible to handle effects (async calls) those are dispatched as actions from the View 
        - createAction(ACTION_TYPE, ACTION_BUILDER)
            - ACTION_TYPE: a constant that represents the name of te action that is being dispatched 
            - ACTION-BUILDER: The Action Creator, this has logic / or invoke logic that performs data manipulation
                - Action Creator may have an input parameter
                - Action Creator, returns a 'payload'
                    - Its is a complex object that contains the final state / data to be updated in the Store 
        - createReducer(initialState, reducer_builder)
            - intialState: State that was generated when the app was loaded
            - reducer_builder: The .addcase() method that listes to the output actin and update the state in the store based on the data received from the output action             
- react-redux    
    - A Bridge / connector between React Object Model (Components) with Redux.js object Model (Store)
        - A 'Provider' COmponent
            - Parent Component that manages lifecycle of all components those have Store Subscription
            - This has 'store' property, that is bound with the 'redux store' created using 'configureStore()' method   