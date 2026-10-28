# 2000sexperience host

The same-origin embedded entry uses xp=1 and a unique xpDoc draft slot. xpHost.ts checks message origin and parent identity; file commands request a host-side XP dialog. Standalone behavior stays on the native EdenText paths.

Open returns a Blob; the editor imports it through the normal ODT/DOCX pipeline or imports TXT as unformatted paragraphs. Only a successful import acknowledges the pending host file binding. New clears that binding.

Save applies encryption before handing bytes to the host. First Save defaults to DOCX, Save As asks for a new destination, and later Save reuses the host binding. The host chooses between IndexedDB-backed desktop files and native computer pickers/downloads. Successful writes update the document name and clean state. Templates and TXT never overwrite the source file.

The embedded editor uses the light ribbon, has no service worker, and reports its document title and dirty state to the desktop window. The host retains the iframe on minimize and confirms closing a dirty document.
