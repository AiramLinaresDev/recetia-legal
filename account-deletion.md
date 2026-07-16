---
layout: default
title: Eliminación de Cuenta — RecetIA
description: Procedimiento público para eliminar tu cuenta de RecetIA, conforme a Google Play y App Store.
permalink: /legal/eliminar-cuenta/
---

# Eliminación de Cuenta — RecetIA

**Última actualización:** 5 de mayo de 2026

Esta página describe el procedimiento público de eliminación de cuenta requerido por **Google Play Developer Program Policy** (vigente desde mayo de 2024) y por las **App Store Review Guidelines §5.1.1(v)** de Apple.

## Cómo eliminar tu cuenta y todos tus datos

### Opción A — Desde la App (recomendado, instantáneo)

1. Abre RecetIA en tu teléfono.
2. Inicia sesión con tu cuenta.
3. Toca **Perfil** (esquina inferior derecha).
4. Desplázate hasta **Ajustes de la App**.
5. Toca **Eliminar cuenta**.
6. Confirma ingresando tu contraseña actual y escribiendo la palabra **ELIMINAR** cuando se te pida.
7. Verás una pantalla de confirmación. Tu cuenta y datos asociados se eliminan en menos de 30 días.

> **Si iniciaste sesión con Google o Apple** y no tienes contraseña, escribe **ELIMINAR** en mayúsculas y confirma con el botón.

### Opción B — Por correo electrónico

Si no puedes acceder a la App, escribe a:

**airamlinaresdev@gmail.com**

Desde el correo asociado a tu cuenta, indicando:
- Asunto: "Solicitud de eliminación de cuenta — RecetIA"
- Cuerpo: "Solicito la eliminación definitiva de mi cuenta y todos los datos asociados."

Responderemos en un máximo de **20 días hábiles** confirmando la eliminación o solicitando información adicional para verificar tu identidad.

## ¿Qué datos se eliminan?

| Categoría | ¿Se elimina? | Detalle |
|---|---|---|
| Perfil (nombre, apellido, email, avatar, biografía) | ✅ Sí | Eliminación total |
| Contraseña | ✅ Sí | Eliminación total |
| Refresh tokens y sesiones activas | ✅ Sí | Revocados al instante |
| Avatar en Cloudinary | ✅ Sí | Eliminado del CDN |
| Recetas creadas por ti | ⚠️ Anonimizadas | Se desvincula tu usuario (`UserId = null`); el contenido permanece sin atribución para preservar el catálogo compartido. Si prefieres que se borren completamente, indícalo en tu solicitud por correo. |
| Favoritos | ✅ Sí | Eliminación total |
| Historial de recetas vistas | ✅ Sí | Eliminación total |
| Listas de compras | ✅ Sí | Eliminación total |
| Planes de comidas | ✅ Sí | Eliminación total |
| Reseñas | ✅ Sí | Eliminación total |
| Preferencias dietéticas | ✅ Sí | Eliminación total |
| Tokens de notificación push | ✅ Sí | Eliminación total |

## ¿Qué datos pueden conservarse?

| Dato | Plazo | Justificación |
|---|---|---|
| Backups cifrados | Máx. 30 días | Rotación automática |
| Logs de seguridad anonimizados (IPs hasheadas) | 90 días | Prevención de fraude (interés legítimo) |
| Trazas de error en Sentry sin PII | 90 días | Mejora del servicio |
| Información para defender reclamaciones legales | Hasta 5 años | Código de Comercio (México) |
| Registros contables (si hubo pagos) | 5-10 años | Obligación fiscal |

## ¿Cuánto tarda?

- **Desde la App:** la eliminación efectiva en producción ocurre **inmediatamente** (la cuenta deja de funcionar al instante).
- **Eliminación de respaldos:** máximo **30 días**.
- **Por correo:** máximo **20 días hábiles**.

## ¿Es reversible?

**No.** La eliminación es definitiva. Si más adelante quieres volver a usar RecetIA, deberás crear una cuenta nueva desde cero.

## ¿Puedo solo desactivar mi cuenta sin eliminarla?

Actualmente no ofrecemos desactivación temporal. Si solo quieres dejar de recibir notificaciones, ve a **Perfil → Notificaciones** y desactívalas. Si solo quieres dejar de usar la App temporalmente, simplemente desinstálala (tus datos permanecen en el servidor).

## Contacto

- Privacidad: airamlinaresdev@gmail.com
- Soporte: recetia.app@gmail.com
- Domicilio: Jerez de la Frontera, España

---

*Conforme a Apple App Store Review Guidelines §5.1.1(v) y Google Play Developer Program Policy "Account deletion" (mayo 2024).*
