use tauri::Manager;
use window_vibrancy::{apply_blur, apply_vibrancy, apply_mica, apply_acrylic, NSVisualEffectMaterial};
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(|app| {
            let window = app.get_window("main").expect("Failed to get Tauri window");
            #[cfg(target_os = "windows")]
            apply_mica(&window, Some(true)).expect("错误");
            // apply_acrylic(&window, Some((0, 0, 0, 255))).expect("error");
            
            if cfg!(debug_assertions) {
                app.handle().plugin(
                    tauri_plugin_log::Builder::default()
                        .level(log::LevelFilter::Info)
                        .build(),
                )?;
            }
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
