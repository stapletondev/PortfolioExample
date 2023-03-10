import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const sections = [
  {
    label: 'Projects',
    url: '#projects',
    anchor: 'projects'
  },
  {
    label: 'Contact Me',
    url: '#contact-me',
    anchor: 'contactme'
  },
]

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const [scrollUp, setScrollUp] = useState(true)
  const prevScroll = useRef(0)


  const handleScroll = (event) => {
    const newScroll = event.currentTarget.scrollY
    setScrollUp(newScroll < prevScroll.current)
    prevScroll.current = newScroll
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const boxTranslateY = scrollUp ? 0 : -200


  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      transform={`translateY(${boxTranslateY}px)`}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto" >
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {
                socials.map((social, index) => {
                  const {url, icon} = social
                  return (
                    <a href={url} key={index}>
                      <FontAwesomeIcon icon={icon} size="2x" />
                    </a>
                  )
                })
              }
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {
                sections.map((section, index) => {
                  const {url, label, anchor} = section
                  return (
                    <a href={url} onClick={handleClick(anchor)} key={index}>
                      {label}
                    </a>
                  )
                })
              }
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
