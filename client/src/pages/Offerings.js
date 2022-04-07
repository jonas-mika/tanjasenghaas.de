import React, { useState } from "react";
import {
  Flex,
  Box,
  Text,
  Grid,
  GridItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

// custom imports
import Back from "../components/Back";
import Header from "../layouts/Header";

const MotionFlex = motion(Flex);

const Item = ({
  title,
  description,
  titleColor,
  ...props
}) => {
  return (
    <Flex
      direction="column"
      justify="flex-start"
      maxWidth={500}
      {...props}
    >
      <Text
        fontSize={[
          ".7rem",
          ".8rem",
          ".9rem",
          ".9rem",
          "1rem",
        ]}
        fontWeight={500}
        color={titleColor}
      >
        {title}
      </Text>
      <Text
        fontSize={[
          ".7rem",
          ".8rem",
          ".9rem",
          ".9rem",
          "1rem",
        ]}
        fontWeight={300}
        mb="1rem"
      >
        {description}
      </Text>
    </Flex>
  );
};

const Offerings = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <MotionFlex
        direction="column"
        mx="auto"
        px={{ sm: "2rem", md: "3rem" }}
        w="100%"
        my="6rem"
        maxWidth={1200}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Back mb="3rem" />
        <Text
          mb="2rem"
          fontSize={[
            ".8rem",
            ".9rem",
            "1rem",
            "1.1rem",
            "1.2rem",
          ]}
          fontWeight="bold"
          textTransform="uppercase"
        >
          Meine Philosophie
        </Text>
        <Item
          title="Editorial Design"
          description="Rhythmus – Charakter – leichtes Erfassen komplexer Zusammenhänge:Durch den Blick auf das große Ganze unterstützt und bestimmt das Visuelle den Inhalt und prägt wie nebenbei das gesamte Erscheinungsbild."
        />
        <Item
          title="Artdirektion"
          description="Stilbewusstsein – Komplexität – hohe Qualität und deren Kontrolle: Die kreative Umsetzung und Begleitung aller Produktionsvorgänge fußt auf einer künstlerischen Verantwortung."
        />
        <Item
          title="Grafikdesign"
          description="Typographie – Bildsprache – Farbenvielfalt – Materialität: Deren Komposition lässt gedankliche Zusammenhänge in visuell erfahrbarem Kontext entstehen und erlebbar machen"
          mb="2rem"
        />
        <Text
          fontSize={[
            ".7rem",
            ".8rem",
            ".9rem",
            ".9rem",
            "1rem",
          ]}
          fontWeight={400}
          mb="1rem"
        >
          Als diplomierte Grafikdesignerin arbeite ich seit
          mehr als 20 Jahrenin verantwortlichen Positionen
          als Art- und Kreativ Direktorin. Seit vielen
          Jahren entwickle und designe ich Magazine für
          verschiedene Verlage und Unternehmen und erarbeite
          neue visuelle Konzepte.
        </Text>
        <Text
          mb="2rem"
          fontSize={[
            ".8rem",
            ".9rem",
            "1rem",
            "1.1rem",
            "1.2rem",
          ]}
          fontWeight="bold"
          textTransform="uppercase"
          mt="4rem"
        >
          Angebote
        </Text>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap="1rem 0"
        >
          <Item
            maxWidth="80%"
            title="Branding"
            description="Entwicklung von Logos, Corporate Design, Webauftritt"
          />
          <Item
            maxWidth="80%"
            title="Magazindesign"
            description="Neuentwicklung und Überarbeitung von Magazinen, Broschüren und White Papers"
          />
          <Item
            maxWidth="80%"
            title="Workshops"
            description="Vorträge und Workshops rund um das Thema Gestaltung und Magazinentwicklung. Online und Offline."
          />
          <Item
            maxWidth="80%"
            title="Consulting"
            description="Beratung zu grafischen und den damit relevanten organisatorischen Fragen in Ihrem Unternehmen."
          />
          <Item
            mt="2rem"
            maxWidth="80%"
            titleColor="red"
            title="Pro Bono"
            description="Auch soziale Projekte brauchen Konzeption und Gestaltung. Dafür spende ich 10% meiner Arbeitszeit. Sprechen Sie mich an!"
          />
        </Grid>
      </MotionFlex>
    </>
  );
};

export default Offerings;
