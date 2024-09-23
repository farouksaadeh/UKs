# Auftrag 5.1: Verschiedene UI-Komponenten kennenlernen

## Glossareinträge für UI-Komponenten

### 1. Accordion

- **Name und Synonyme**: 
  - Accordion, Collapsible Panel

- **Einsatzzweck und Funktion**:
  - Die Accordion-Komponente ermöglicht es, Inhalte in einer hierarchischen Struktur anzuzeigen, die aus- und eingeklappt werden können. Diese Komponente wird oft verwendet, um Inhalte zu organisieren, die nicht permanent sichtbar sein müssen, aber bei Bedarf leicht zugänglich gemacht werden können. Beispiele hierfür sind FAQ-Bereiche auf Websites oder komplexe Formularschritte, die bei Bedarf erweitert werden.

- **Screenshots**:
  - **Desktop-Version**:
    ![Accordion Desktop](https://mui.com/material-ui/components/accordion/)
  - **Mobile-Version**:
    ![Accordion Mobile](https://mui.com/material-ui/components/accordion/)

- **Technische Details**:
  - Implementiert mit [Material UI Accordion](https://mui.com/material-ui/components/accordion/) oder [Ant Design Accordion](https://ant.design/components/collapse/).
  - Code-Beispiel:
  
    ```jsx
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Accordion 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Inhalt des Accordion 1.
        </Typography>
      </AccordionDetails>
    </Accordion>
    ```

---

### 2. Multiselect

- **Name und Synonyme**:
  - Multiselect, Mehrfachauswahl

- **Einsatzzweck und Funktion**:
  - Ein Multiselect ist eine UI-Komponente, die es den Benutzern ermöglicht, mehrere Optionen aus einer Liste auszuwählen. Es wird häufig in Formularen eingesetzt, um Benutzer bei der Auswahl von mehreren Kategorien, Tags oder Optionen zu unterstützen. Diese Komponente erhöht die Flexibilität und erleichtert die Interaktion in Situationen, in denen eine Mehrfachauswahl erforderlich ist.

- **Screenshots**:
  - **Desktop-Version**:
    ![Multiselect Desktop](https://mantine.dev/core/multi-select/)
  - **Mobile-Version**:
    ![Multiselect Mobile](https://mantine.dev/core/multi-select/)

- **Technische Details**:
  - Implementiert mit [Mantine Multiselect](https://mantine.dev/core/multi-select/) oder [Material UI Select](https://mui.com/material-ui/react-select/).
  - Code-Beispiel:
  
    ```jsx
    <MultiSelect
      data={['Option 1', 'Option 2', 'Option 3']}
      label="Wählen Sie mehrere Optionen"
      placeholder="Optionen auswählen"
    />
    ```

---

### 3. Date Picker

- **Name und Synonyme**:
  - Date Picker, Datumsauswahl

- **Einsatzzweck und Funktion**:
  - Der Date Picker ist eine UI-Komponente, die es Benutzern ermöglicht, ein Datum durch Klicken auf ein Kalender-Widget auszuwählen. Diese Komponente wird oft in Formularen verwendet, um das Eingeben von Datumsangaben zu erleichtern und Fehler zu minimieren. Beispiele für den Einsatz sind Buchungssysteme, Kalenderanwendungen und Eventplanung.

- **Screenshots**:
  - **Desktop-Version**:
    ![Date Picker Desktop](https://mantine.dev/core/date-picker/)
  - **Mobile-Version**:
    ![Date Picker Mobile](https://mantine.dev/core/date-picker/)

- **Technische Details**:
  - Implementiert mit [Mantine Date Picker](https://mantine.dev/core/date-picker/) oder [Material UI Date Picker](https://mui.com/x/react-date-pickers/).
  - Code-Beispiel:
  
    ```jsx
    <DatePicker
      label="Wählen Sie ein Datum"
      placeholder="Klicken Sie, um ein Datum auszuwählen"
    />
    ```

---

### 4. Autocomplete

- **Name und Synonyme**:
  - Autocomplete, Automatische Vervollständigung

- **Einsatzzweck und Funktion**:
  - Die Autocomplete-Komponente erleichtert die Eingabe von Text, indem sie Vorschläge basierend auf den bereits eingegebenen Zeichen anzeigt. Diese Komponente wird häufig bei Suchfeldern verwendet, um Benutzern schneller relevante Ergebnisse zu präsentieren und Eingabefehler zu minimieren.

- **Screenshots**:
  - **Desktop-Version**:
    ![Autocomplete Desktop](https://mantine.dev/core/autocomplete/)
  - **Mobile-Version**:
    ![Autocomplete Mobile](https://mantine.dev/core/autocomplete/)

- **Technische Details**:
  - Implementiert mit [Mantine Autocomplete](https://mantine.dev/core/autocomplete/) oder [Material UI Autocomplete](https://mui.com/material-ui/react-autocomplete/).
  - Code-Beispiel:
  
    ```jsx
    <Autocomplete
      data={['Apple', 'Banana', 'Cherry']}
      label="Obst"
      placeholder="Geben Sie ein Obst ein"
    />
    ```

---

### 5. Slider

- **Name und Synonyme**:
  - Slider, Schieberegler

- **Einsatzzweck und Funktion**:
  - Der Slider ermöglicht es dem Benutzer, einen Wert aus einem bestimmten Bereich durch Verschieben eines Reglers auszuwählen. Diese Komponente wird häufig in Einstellungen und Formularen verwendet, um numerische Werte wie Lautstärke, Preisbereiche oder Prozentwerte auszuwählen.

- **Screenshots**:
  - **Desktop-Version**:
    ![Slider Desktop](https://mui.com/material-ui/react-slider/)
  - **Mobile-Version**:
    ![Slider Mobile](https://mui.com/material-ui/react-slider/)

- **Technische Details**:
  - Implementiert mit [Material UI Slider](https://mui.com/material-ui/react-slider/) oder [Mantine Slider](https://mantine.dev/core/slider/).
  - Code-Beispiel:
  
    ```jsx
    <Slider
      defaultValue={30}
      min={0}
      max={100}
      step={10}
      label="Lautstärke"
    />
    ```

---

### 6. Progress Bar

- **Name und Synonyme**:
  - Progress Bar, Fortschrittsbalken

- **Einsatzzweck und Funktion**:
  - Die Progress Bar zeigt den Fortschritt einer Aktion an, z. B. das Hochladen von Dateien, das Abschließen eines Formulars oder die Fertigstellung eines Downloads. Sie gibt dem Benutzer eine visuelle Rückmeldung über den aktuellen Stand der Aktion.

- **Screenshots**:
  - **Desktop-Version**:
    ![Progress Bar Desktop](https://mui.com/material-ui/react-progress/)
  - **Mobile-Version**:
    ![Progress Bar Mobile](https://mui.com/material-ui/react-progress/)

- **Technische Details**:
  - Implementiert mit [Material UI Progress Bar](https://mui.com/material-ui/react-progress/) oder [Mantine Progress Bar](https://mantine.dev/core/progress/).
  - Code-Beispiel:
  
    ```jsx
    <Progress value={50} label="Fortschritt" />
    ```

---

### 7. Carousel/Slideshow

- **Name und Synonyme**:
  - Carousel, Slideshow, Diashow

- **Einsatzzweck und Funktion**:
  - Das Carousel ermöglicht die Anzeige von Inhalten, wie z. B. Bildern oder Karten, in einer durchlaufenden Diashow. Es wird oft verwendet, um mehrere Inhalte in einem begrenzten Raum darzustellen und den Benutzer durch verschiedene Optionen zu navigieren.

- **Screenshots**:
  - **Desktop-Version**:
    ![Carousel Desktop](https://mantine.dev/core/carousel/)
  - **Mobile-Version**:
    ![Carousel Mobile](https://mantine.dev/core/carousel/)

- **Technische Details**:
  - Implementiert mit [Mantine Carousel](https://mantine.dev/core/carousel/).
  - Code-Beispiel:
  
    ```jsx
    <Carousel>
      <Carousel.Slide>Bild 1</Carousel.Slide>
      <Carousel.Slide>Bild 2</Carousel.Slide>
    </Carousel>
    ```

---

### 8. Rating

- **Name und Synonyme**:
  - Rating, Sternebewertung

- **Einsatzzweck und Funktion**:
  - Die Rating-Komponente ermöglicht es Benutzern, eine Bewertung abzugeben, indem sie eine Anzahl von Sternen oder Symbolen auswählen. Sie wird häufig bei Produktempfehlungen, Benutzerfeedback oder Rezensionssystemen eingesetzt.

- **Screenshots**:
  - **Desktop-Version**:
    ![Rating Desktop](https://mantine.dev/core/rating/)
  - **Mobile-Version**:
    ![Rating Mobile](https://mantine.dev/core/rating/)

- **Technische Details**:
  - Implementiert mit [Mantine Rating](https://mantine.dev/core/rating/) oder [Material UI Rating](https://mui.com/material-ui/react-rating/).
  - Code-Beispiel:
  
    ```jsx
    <Rating defaultValue={3} />
    ```

---

### 9. Treeview

- **Name und Synonyme**:
  - Treeview, Baumstruktur

- **Einsatzzweck und Funktion**:
  - Die Treeview-Komponente ermöglicht es, hierarchische Strukturen darzustellen, z. B. Dateisysteme oder Organisationsdiagramme. Der Benutzer kann Zweige des Baums öffnen oder schließen, um detaillierte Informationen zu sehen.

- **Screenshots**:
  - **Desktop-Version**:
    ![Treeview Desktop](https://mui.com/material-ui/react-tree-view/)
  - **Mobile-Version**:
    ![Treeview Mobile](https://mui.com/material-ui/react-tree-view/)

- **Technische Details**:
  - Implementiert mit [Material UI Treeview](https://mui.com/material-ui/react-tree-view/).
  - Code-Beispiel:
  
    ```jsx
    <TreeView>
      <TreeItem nodeId="1" label="Hauptverzeichnis">
        <TreeItem nodeId="2" label="Unterverzeichnis 1" />
        <TreeItem nodeId="3" label="Unterverzeichnis 2" />
      </TreeItem>
    </TreeView>
    ```

---

## Quellen

- [Material UI](https://mui.com/material-ui/)
- [Ant Design](https://ant.design/components/overview/)
- [FAST Design](https://explore.fast.design)
- [Mantine](https://mantine.dev/)
