import { Center, CenterProps } from "@chakra-ui/layout";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../shared/components/Button";

function SessionsPageActionsPanel({ ...props }: CenterProps) {
  return (
    <Center {...props}>
      <Button
        leftIcon={<FontAwesomeIcon icon={faEye} />}
        variant="outline"
        size="lg"
      >
        SHOW CARDS
      </Button>
    </Center>
  );
}

export default SessionsPageActionsPanel;
