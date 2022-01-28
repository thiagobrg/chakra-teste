import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Thiago Guimarães</Text>
          <Text color="gray.300" fontSize="small">
            thiago.guimaraes@vertis-solutions.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Thigo Guimarães"
        src="https://github.com/thiagobrg.png"
      />
    </Flex>
  );
}