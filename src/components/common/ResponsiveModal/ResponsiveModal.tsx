import { Drawer, Modal } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

interface ResponsiveModalProps {
  title: string;
  opened: boolean;
  children: React.ReactNode;
  close: () => void;
  onClick?: () => void;
}

const ResponsiveModal = ({ close, onClick, opened, title, children }: ResponsiveModalProps) => {
  const isMobile = useMediaQuery('(max-width: 50em)');

  if (isMobile) {
    <Drawer opened={opened} onClick={onClick} onClose={close} position="bottom" title={title}>
      {children}
    </Drawer>;
  }

  return (
    <Modal
      opened={opened}
      onClick={onClick}
      onClose={close}
      title={title}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
    >
      {children}
    </Modal>
  );
};

export default ResponsiveModal;
