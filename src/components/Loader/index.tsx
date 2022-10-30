import { motion } from 'framer-motion'
import { useContext, useEffect, useState } from 'react'
import { IssuesContext } from '../../contexts/IssuesContext'
import { UserContext } from '../../contexts/UserContext'
import { LoaderContainer } from './styles'

export function Loader() {
  const [isLoading, setIsLoading] = useState(false)

  const { userIsLoading } = useContext(UserContext)

  useEffect(() => {
    if (userIsLoading) {
      setIsLoading(true)
    } else {
      setTimeout(() => {
        setIsLoading(false)
      }, 500)
    }
  }, [userIsLoading])

  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 0.2,
      pathLength: 1,
    },
  }

  return (
    <>
      {isLoading && (
        <LoaderContainer>
          <motion.svg
            width="148"
            height="98"
            viewBox="0 0 148 98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M70.2352 18.7646L70.2353 18.7647C70.919 19.4483 70.919 20.5516 70.2353 21.2353L70.2353 21.2353L55.2376 36.2353C54.554 36.9189 53.4461 36.9189 52.7626 36.2353C52.0791 35.5517 52.0791 34.4483 52.7626 33.7646L52.7626 33.7646L65.9914 20.5302L66.5214 19.9999L65.9913 19.4697L52.7626 6.23771C52.7626 6.2377 52.7626 6.23769 52.7626 6.23769C52.0792 5.55408 52.0791 4.44622 52.7623 3.76252C52.7624 3.76249 52.7624 3.76245 52.7624 3.76242C52.7625 3.76237 52.7625 3.76232 52.7626 3.76226C53.4461 3.07945 54.5541 3.07945 55.2378 3.76248C55.2378 3.76251 55.2378 3.76253 55.2379 3.76256L70.2352 18.7646ZM94 33.25C94.9686 33.25 95.75 34.0314 95.75 35C95.75 35.9686 94.9686 36.75 94 36.75H71.5C70.5314 36.75 69.75 35.9686 69.75 35C69.75 34.0314 70.5314 33.25 71.5 33.25H94Z"
              stroke="#3294F8"
              strokeWidth="1.5"
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: {
                  duration: 1.5,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'mirror',
                },
              }}
            />
          </motion.svg>
        </LoaderContainer>
      )}
    </>
  )
}
