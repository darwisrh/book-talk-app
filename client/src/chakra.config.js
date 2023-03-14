import { ChakraProvider, extendBaseTheme } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'

// App
import App from './App'

const { 
   Button,
   FormControl,
   FormLabel,
   FormErrorMessage,
   FormHelperText,
   Input,
   Card, 
   CardHeader, 
   CardBody, 
   CardFooter,
   Tabs, 
   TabList, 
   TabPanels, 
   Tab, 
   TabPanel,
   Heading
} = chakraTheme.components

const theme = extendBaseTheme({
   components: {
      Button,
      FormControl,
      FormLabel,
      FormErrorMessage,
      FormHelperText,
      Input,
      Card, 
      CardHeader, 
      CardBody, 
      CardFooter,
      Tabs, 
      TabList, 
      TabPanels, 
      Tab, 
      TabPanel,
      Heading
   }
})

function WithChakra() {
   return (
      <ChakraProvider theme={theme}>
         <App />
      </ChakraProvider>
   )
}

export default WithChakra