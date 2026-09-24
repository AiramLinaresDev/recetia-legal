---
layout: default
title: Política de Privacidad — RecetIA
description: Política de Privacidad de RecetIA — tratamiento de datos personales conforme al RGPD.
permalink: /legal/privacidad/
---

# Política de Privacidad de RecetIA

**Versión:** 1.1
**Fecha de última actualización:** 22 de septiembre de 2026
**Responsable del tratamiento:** Airam Linares Ossorio (Persona física — España (identificación disponible bajo solicitud verificada al email de privacidad)), con domicilio en Jerez de la Frontera, España.
**Contacto de privacidad:** airamlinaresdev@gmail.com

---

## 1. Quiénes somos

RecetIA (en adelante, "la App", "nosotros") es una aplicación móvil que permite a sus usuarios buscar, crear, guardar y compartir recetas de cocina, generar nuevas recetas mediante inteligencia artificial, planificar comidas semanales y administrar listas de compras. La App es operada por **Airam Linares Ossorio**.

Esta Política de Privacidad describe **qué datos personales recabamos, para qué los usamos, con quién los compartimos, durante cuánto tiempo los conservamos y qué derechos puedes ejercer sobre ellos**, en cumplimiento de:

- el **Reglamento (UE) 2016/679, General de Protección de Datos (RGPD)**;
- la **Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD)**, de España;
- los **App Store Review Guidelines §5.1.1** de Apple;
- la **Developer Program Policy** y el **Data Safety form** de Google Play;
- la **Children's Online Privacy Protection Act (COPPA)** de EE. UU., cuando aplique.

RecetIA se desarrolla y opera desde **España**, así que el RGPD y la LOPDGDD son el marco principal. Si resides fuera del Espacio Económico Europeo, tu normativa local puede reconocerte derechos adicionales: escríbenos y los atenderemos igual.

## 2. Datos personales que tratamos

| Categoría | Datos específicos | Origen | Obligatorio |
|---|---|---|---|
| **Identificación** | Nombre, apellido, correo electrónico | Tú al registrarte | Sí |
| **Autenticación** | Hash de contraseña (PBKDF2 con HMAC-SHA256 mediante el `PasswordHasher<TUser>` por defecto de ASP.NET Core Identity), tokens de sesión (JWT + refresh tokens) | Generados al registrarte / iniciar sesión | Sí |
| **Cuentas vinculadas** | Identificador único de Google o Apple (sub claim), correo verificado | Proveedor OAuth elegido | Solo si usas inicio de sesión social |
| **Perfil** | Foto de perfil (avatar), biografía, preferencias dietéticas (vegetariano, vegano, sin gluten, alergias, nivel de habilidad, cocinas favoritas) | Tú al editar tu perfil o completar el onboarding | No |
| **Contenido del usuario** | Recetas que creas, recetas que marcas como favoritas, reseñas, listas de compras, planes de comidas, historial de recetas vistas | Tu uso de la App | No |
| **Interacción con IA** | Texto de los prompts que envías al asistente IA y a los generadores de recetas, ingredientes que listas | Tu uso de la App | No |
| **Imágenes** | Fotos que subes para tus recetas y avatar | Tu cámara o galería | Solo si las subes |
| **Notificaciones push** | Token de dispositivo (Expo Push Token) | Otorgado por Apple/Google al aceptar permisos | Solo si activas notificaciones |
| **Diagnóstico técnico** | Errores y trazas de stack (vía Sentry), versión de la App, modelo de dispositivo aproximado, sistema operativo | Recabado automáticamente cuando hay un error | Sí (no se usa con fines comerciales) |
| **Rendimiento** | Tiempos de respuesta del API, métricas agregadas anónimas | Sentry tracing | Sí |

**No recabamos:**
- Categorías especiales de datos del art. 9 RGPD (origen étnico, salud, datos genéticos o biométricos, convicciones religiosas, etc.) excepto por las preferencias dietéticas y alergias que tú decides ingresar voluntariamente para personalizar recomendaciones.
- Ubicación GPS precisa.
- Identificadores publicitarios (IDFA / GAID). RecetIA **no muestra publicidad** ni hace tracking cross-app.
- Información de contactos, calendario, fotos completas de la galería (solo accedemos a las fotos que tú seleccionas explícitamente).
- Datos biométricos.

## 3. Finalidades del tratamiento

### Finalidades primarias (necesarias para prestar el servicio)
1. Crear y administrar tu cuenta.
2. Autenticarte y mantener tu sesión segura.
3. Mostrarte tus recetas, favoritos, historial, planes de comidas y listas de compras.
4. Generar recetas, respuestas conversacionales e imágenes mediante modelos de inteligencia artificial operados por Groq Inc. y OpenAI, y revisar con un clasificador automático el contenido que se publica.
5. Personalizar las recomendaciones de recetas según tus preferencias dietéticas y alergias.
6. Enviar notificaciones push relacionadas con tu planificador de comidas (solo si activas el permiso).
7. Mantener la seguridad de la App: detectar y prevenir fraude, abuso, ataques de fuerza bruta, abuso de IA.
8. Cumplir obligaciones legales y atender requerimientos de autoridades competentes.

### Finalidades secundarias (no necesarias, requieren consentimiento)
9. Mejorar la calidad del modelo de IA mediante análisis agregado y anonimizado de prompts (esto es **opt-in**, deshabilitado por defecto, gestionable desde Ajustes).
10. Enviar correos electrónicos esporádicos sobre nuevas funcionalidades (solo si lo activas).

Si no deseas que tus datos se traten para las finalidades secundarias, puedes manifestarlo desde la pantalla **Perfil → Ajustes → Preferencias** o escribiéndonos a airamlinaresdev@gmail.com. Negarte a las finalidades secundarias no afectará el uso de la App.

## 4. Base legal del tratamiento (RGPD)

| Finalidad | Base legal RGPD |
|---|---|
| Crear y operar tu cuenta (1-6) | Ejecución de un contrato (art. 6.1.b) |
| Moderar el contenido que se publica (4) | Interés legítimo (art. 6.1.f): mantener la App libre de contenido ilegal o peligroso |
| Seguridad y prevención de fraude (7) | Interés legítimo (art. 6.1.f) |
| Cumplimiento de obligaciones legales (8) | Obligación legal (art. 6.1.c) |
| Mejora del modelo de IA y marketing (9-10) | Consentimiento explícito opt-in (art. 6.1.a), revocable en cualquier momento |

## 5. Encargados y terceros con quienes se comparten datos

Compartimos datos personales únicamente con los siguientes encargados del tratamiento (art. 28 RGPD), bajo contrato de tratamiento de datos:

| Proveedor | Servicio | Datos transferidos | País | Marco de transferencia |
|---|---|---|---|---|
| **Groq Inc.** | Clasificación automática del contenido que publicas y, según la configuración vigente, generación de recetas y chat | Texto de las recetas que guardas, prompts y mensajes que envías al asistente, y la URL de la imagen que acompaña a la receta | EE. UU. | Cláusulas Contractuales Tipo (SCC); Groq no entrena sus modelos con datos de la API. |
| **OpenAI** | Generación de recetas y de chat cuando es el proveedor configurado, y creación de las imágenes de receta | Prompts, mensajes e ingredientes que envías, y la descripción con la que se genera la imagen | EE. UU. / UE | SCC; OpenAI no entrena sus modelos con datos enviados por la API. |
| **RevenueCat, Inc.** | Gestión de suscripciones y validación de compras | Identificador de cliente asociado a tu cuenta, estado e historial de la suscripción | EE. UU. | SCC. El cobro lo realiza la tienda (Google Play o App Store), que no nos entrega tus datos de pago. |
| **Cloudinary** | Almacenamiento y CDN de imágenes (recetas, avatares) | Imágenes que subes y el ID de tu usuario asociado | EE. UU. | SCC GDPR; eliminación bajo demanda. |
| **Google** | Validación de tokens Google Sign-In | `sub` claim de Google asociado a tu sesión | EE. UU. / UE | SCC GDPR. |
| **Expo (Expo Application Services, Inc.)** | Servicio Expo Push (relay hacia APNs/FCM) | Token push del dispositivo (`ExponentPushToken[...]`), payload del mensaje | EE. UU. | SCC GDPR. Expo reenvía a Apple Push Notification service (APNs) y Firebase Cloud Messaging (FCM) según la plataforma. |
| **Apple Inc.** | Notificaciones push (APNs) y validación Sign in with Apple | Token push, identificador Apple anónimo | EE. UU. | Acuerdo Apple Developer. |
| **Sentry (Functional Software, Inc.)** | Monitoreo de errores y rendimiento | Trazas de error, versión de App, modelo de dispositivo (sin PII por configuración `sendDefaultPii: false` tanto en backend como en cliente; no se envían IPs, cookies ni headers sensibles) | EE. UU. | SCC GDPR. |
| **Proveedor SMTP** (airamlinaresdev@gmail.com) | Envío de correos transaccionales (recuperación de contraseña) | Correo electrónico, nombre, token de recuperación | UE/EE. UU. | SCC GDPR. |
| **Hosting del API** (Railway / proveedor PaaS) | Operación del backend ASP.NET Core 9 + base de datos MySQL | Todos los datos de tu cuenta y contenido | UE/EE. UU. | SCC GDPR. |

**No vendemos tus datos personales a ningún tercero, ni para ningún propósito.** No realizamos elaboración de perfiles automatizados que produzcan efectos jurídicos sobre ti.

## 6. Conservación de datos

| Dato | Plazo de conservación |
|---|---|
| Cuenta activa (perfil, contenido, recetas, favoritos) | Mientras tu cuenta exista |
| Refresh tokens activos | 7 días desde su emisión |
| Refresh tokens revocados/expirados | 30 días, después se eliminan automáticamente por `TokenCleanupService` |
| Logs de seguridad (intentos de login, IP) | 90 días |
| Trazas de error (Sentry) | 90 días, después agregadas y anonimizadas |
| Datos de cuenta tras eliminación voluntaria | Eliminación efectiva en máximo **30 días** desde la solicitud (ver §9) |
| Backups cifrados | Hasta 30 días, después rotados |
| Información necesaria para defender reclamaciones legales o cumplir obligaciones contables y fiscales | Hasta 6 años (art. 30 del Código de Comercio) y 4 años en lo tributario (Ley 58/2003, General Tributaria) |

## 7. Seguridad

Implementamos medidas administrativas, técnicas y físicas razonables para proteger tus datos:

- **En tránsito:** todas las comunicaciones App ↔ API usan HTTPS/TLS 1.2+.
- **En reposo:** contraseñas almacenadas con hash PBKDF2 (HMAC-SHA256) mediante el `PasswordHasher<TUser>` por defecto de ASP.NET Core Identity (nunca en texto plano).
- **Tokens:** el JWT de acceso vive 60 minutos; los refresh tokens son aleatorios criptográficamente seguros (`RandomNumberGenerator` de 64 bytes, base64) con rotación automática y revocación al cambiar contraseña, cerrar sesión global o eliminar la cuenta.
- **Rate limiting** en login, registro, recuperación de contraseña y endpoints de IA para prevenir fuerza bruta y abuso.
- **Sanitización de prompts** para prevenir inyección al modelo de IA.
- **Headers de seguridad HTTP:** `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, HSTS en producción.
- **Tokens de sesión almacenados en `expo-secure-store`** (Keychain en iOS, EncryptedSharedPreferences en Android).
- **Auditoría continua** de dependencias (Dependabot, npm audit, dotnet list package --vulnerable).

Ninguna medida de seguridad es absoluta. Si detectas una vulnerabilidad, repórtala a airamlinaresdev@gmail.com.

## 8. Tus derechos (RGPD)

Tienes derecho a:

| Derecho | Cómo ejercerlo |
|---|---|
| **Acceder** a tus datos personales | Desde la App: **Perfil → Editar perfil**, o solicitando una copia a airamlinaresdev@gmail.com |
| **Rectificar** datos inexactos | **Perfil → Editar perfil** |
| **Suprimir** tus datos (art. 17) | **Perfil → Eliminar cuenta** (eliminación efectiva ≤ 30 días) o por correo |
| **Oponerte** al tratamiento para finalidades secundarias | **Perfil → Ajustes** |
| **Portabilidad** (art. 20): exportar tus recetas y datos en formato JSON | Solicitud por correo a airamlinaresdev@gmail.com; respuesta en 30 días |
| **Limitar** el tratamiento | Por correo |
| **Retirar el consentimiento** previamente otorgado | Por correo o desde Ajustes |
| **No ser objeto de decisiones automatizadas** con efectos jurídicos | Aplica por defecto: no realizamos profiling con efectos jurídicos |
| **Presentar una reclamación** ante la autoridad de control | Agencia Española de Protección de Datos, AEPD (https://www.aepd.es). Si resides en otro Estado miembro, ante la autoridad de tu país |

**Plazo de respuesta:** un mes desde la solicitud, prorrogable otros dos si la petición es compleja, avisándote del motivo (art. 12.3 RGPD).

## 9. Eliminación de cuenta

Puedes eliminar tu cuenta y todos los datos asociados directamente desde la App:

**Perfil → Eliminar cuenta**

Al confirmar la eliminación:
1. Se revocan todos tus refresh tokens (cierra todas tus sesiones).
2. Se elimina tu avatar de Cloudinary.
3. Tus recetas creadas se **anonimizan** (se desvincula tu usuario, `UserId = null`, conservando el contenido sin datos identificativos).
4. Tus favoritos, historial, listas de compras, planes de comidas, reseñas y preferencias se eliminan permanentemente.
5. Tu registro de usuario se borra de la base de datos.

La eliminación es **definitiva** y se completa en menos de 30 días. Cierta información puede conservarse en backups cifrados hasta su rotación (máx. 30 días) o cuando exista una obligación legal de conservación.

También puedes solicitar la eliminación escribiendo a airamlinaresdev@gmail.com desde el correo asociado a tu cuenta. Procedimiento público alternativo: https://recetiapp.com/account-deletion.html

## 10. Menores de edad

RecetIA está dirigida a personas mayores de **14 años**: es la edad a partir de la cual el art. 7 de la LOPDGDD permite consentir el tratamiento de datos sin autorización de padres o tutores en España. Por debajo hace falta el consentimiento de quien ejerza la patria potestad o tutela. En países cuya edad de consentimiento digital sea inferior rige esa edad, con un mínimo de 13 años. No recabamos conscientemente datos de menores de esa edad; si descubrimos que lo hemos hecho, los eliminamos de inmediato. Escríbenos a airamlinaresdev@gmail.com si crees que ha ocurrido.

## 11. Transferencias internacionales

Como se detalla en §5, algunos encargados están en EE. UU. Las transferencias se realizan al amparo de:
- **Cláusulas Contractuales Tipo (SCC)** aprobadas por la Comisión Europea (Decisión 2021/914), con las medidas complementarias que procedan.
- La **decisión de adecuación del Marco de Privacidad de Datos UE-EE. UU.** (Decisión de 10 de julio de 2023), para los proveedores certificados en él.

## 12. Cookies y tecnologías similares

La App **no usa cookies**. En el sitio web `https://recetiapp.com` usamos exclusivamente cookies estrictamente necesarias para mantener tu sesión.

## 13. Cambios a esta Política

Podemos actualizar esta Política. Los cambios materiales (que afecten cómo tratamos tus datos) se notificarán in-app antes de entrar en vigor, dándote oportunidad de revisarlos y, si así lo decides, cancelar tu cuenta antes de la nueva vigencia. La fecha de última actualización siempre aparece al inicio del documento.

## 14. Aviso a residentes de California (CCPA/CPRA)

Si resides en California, tienes derechos adicionales bajo la CCPA/CPRA: derecho a saber qué información personal recabamos, derecho a eliminar, derecho a corregir, derecho a optar por no vender/compartir (no aplica: no vendemos ni compartimos para publicidad cross-context), y derecho a no ser discriminado por ejercer tus derechos. Solicitudes a airamlinaresdev@gmail.com.

## 15. Contacto

**Encargado de Protección de Datos / Privacy Officer:**
- Correo: airamlinaresdev@gmail.com
- Domicilio: Jerez de la Frontera, España

Para cualquier duda, queja o ejercicio de derechos relacionados con esta Política, escríbenos. Procuraremos responder en un máximo de **un mes**.

---

*Documento actualizado el 22 de septiembre de 2026. Versión 1.1: el marco pasa al RGPD y la LOPDGDD españolas, se incorporan OpenAI y RevenueCat como encargados y se corrige la edad mínima. Para versiones anteriores, contáctanos.*
