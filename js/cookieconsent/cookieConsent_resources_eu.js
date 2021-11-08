window.CookieConsent.init({
  // More link URL on bar
  modalMainTextMoreLink: null,
  // How lond to wait until bar comes up
  barTimeout: 1000,
  // Look and feel
  theme: {
    barColor: "#c61d15",
    barTextColor: "#FFF",
    barMainButtonColor: "#FFF",
    barMainButtonTextColor: "#c61d15",
    modalMainButtonColor: "#c61d15",
    modalMainButtonTextColor: "#FFF",
  },
  language: {
    // Current language
    current: "en",
    locale: {
      en: {
        barMainText:
          "Norberaren eta hirugarrenen cookieak erabiltzen ditugu gure zerbitzuak analizatzeko eta zure lehentasunekin lotutako publizitatea erakusteko, nabigazio-ohituren arabera egindako profil batean oinarrituta (adibidez, bisitatutako orrialdeak).",
        barLinkSetting: "Cookien konfigurazioa",
        barBtnAcceptAll: "Cookie guztiak onartu",
        modalMainTitle: "Cookies",
        modalMainText:
          "Norberaren eta hirugarrenen cookieak erabiltzen ditugu gure zerbitzuak analizatzeko eta zure lehentasunekin lotutako publizitatea erakusteko, nabigazio-ohituren arabera egindako profil batean oinarrituta (adibidez, bisitatutako orrialdeak). Hemen konfiguratu ditzakezu zure hobespenak eta cookie politikari buruzko informazio gehiago lor dezakezu.",
        modalBtnSave: "Konfigurazio hau gorde",
        modalBtnAcceptAll: "Cookie guztiak onartu eta itxi",
        modalAffectedSolutions: "Zerrenda:",
        learnMore: "Gehiago irakurri",
        on: "Aktibatuta",
        off: "Desaktibatuta",
      },
    },
  },
  // List all the categories you want to display
  categories: {
    // Unique name
    // This probably will be the default category
    necessary: {
      // The cookies here are necessary and category cant be turned off.
      // Wanted config value  will be ignored.
      needed: true,
      // The cookies in this category will be let trough.
      // This probably should be false if not necessary category
      wanted: true,
      // If the checkbox is on or off at first run.
      checked: true,
      // Language settings for categories
      language: {
        locale: {
          en: {
            name: "Beharrezko Cookieak",
            description:
              "Cookie hauek ezinbestekoak dira gure webgunean eskuragarri dauden zerbitzuak eskaintzeko eta gure webguneko zenbait ezaugarri erabiltzeko. Cookie hauek gabe, ezin ditugu zerbitzu batzuk eskaini gure webgunean.",
          },
        },
      },
    },
    various: {
      needed: false,
      wanted: false,
      checked: false,
      language: {
        locale: {
          en: {
            name: "Estadistiken Cookieak",
            description:
              "Cookie estatistikoek webguneen jabeek bisitariek webguneekin nola elkarreragiten duten ulertzen laguntzen dute informazioa modu anonimoan bildu eta emanez.",
          },
        },
      },
    },
  },
  // List actual services here
  services: {
    // Unique name
    analytics: {
      // Existing category Unique name
      // This example shows how to block Google Analytics
      category: "various",
      // Type of blocking to apply here.
      // This depends on the type of script we are trying to block
      // Can be: dynamic-script, script-tag, wrapped, localcookie
      type: "dynamic-script",
      // Only needed if "type: dynamic-script"
      // The filter will look for this keyword in inserted scipt tags
      // and block if match found
      search: "analytics",
      // List of known cookie names or Regular expressions matching
      // cookie names placed by this service.
      // These willbe removed from current domain and .domain.
      cookies: [
        {
          // Known cookie name.
          name: "_gid",
          // Expected cookie domain.
          domain: `.${window.location.hostname}`,
        },
        {
          // Regex matching cookie name.
          name: /^_ga/,
          domain: `.${window.location.hostname}`,
        },
      ],
      language: {
        locale: {
          en: {
            name: "Google Analytics",
          },
        },
      },
    },
  },
});
