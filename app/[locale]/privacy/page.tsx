"use client";

import Container from "../../components/Container/Container";
import Section from "../../components/Section/Section";
import Title from "../../components/Title/Title";
import Text from "../../components/Text/Text";
import { useTranslation } from "react-i18next";

export default function PrivacyPage() {
  const { t } = useTranslation();

  return (
    <Section padding="xl">
      <Container>
        <Title level={1} size="XL">
          {t("privacyTitle", { defaultValue: "Privacy Policy" })}
        </Title>
        <Text size="L">
          {t(
            "privacyIntro",
            {
              defaultValue:
                "We are currently finalising the full privacy policy. In the meantime, please reach out to privacy@digitaltableteur.com for any data requests.",
            }
          )}
        </Text>
      </Container>
    </Section>
  );
}
