#!/bin/sh

# Vérifiez que la variable d'environnement est définie
if [ -z "${VITE_API_ENDPOINT}" ]; then
  echo "VITE_API_ENDPOINT is not set. Using the default value."
else
  # Rechercher et remplacer l'ancienne valeur de VITE_API_ENDPOINT dans les fichiers statiques
  find /usr/share/nginx/html -name '*.js' -exec sed -i "s|REPLACE_WITH_API_ENDPOINT|${VITE_API_ENDPOINT}|g" {} \;
fi

# Démarrer Nginx
exec "$@"
