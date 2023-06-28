import React from "react";
import { setupIonicReact } from "@ionic/react";

import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
// import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";

import {
  IonButton,
  IonButtons,
  IonIcon,
  IonTitle,
  IonToolbar,
  IonHeader,
} from "@ionic/react";
import {
  helpCircle,
  personCircle,
  home,
  informationCircle,
} from "ionicons/icons";

setupIonicReact();

function ToolBar() {
  return (
    <>
      <IonHeader>
        <IonToolbar color="light" class="fixed-toolbar">
          <IonButtons slot="end">
            <IonButton fill="clear" color="dark" size="default">
              <IonIcon icon={personCircle} size="default"></IonIcon>
              {/* Contact */}
            </IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton fill="clear" color="dark" size="default">
              {/* Home */}
              <IonIcon icon={informationCircle} size="default"></IonIcon>
            </IonButton>
          </IonButtons>
          <IonButtons slot="start">
            <IonButton fill="clear" color="dark" size="small">
              <IonIcon slot="start" icon={home} size="default"></IonIcon>
              {/* Contact */}
            </IonButton>
          </IonButtons>
          <IonTitle>Welcome to Trify</IonTitle>
        </IonToolbar>
      </IonHeader>
    </>
  );
}
export default ToolBar;
