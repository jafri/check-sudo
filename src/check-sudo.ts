import { exec } from 'child_process'

export async function checkWindowsSudo() {
	if (process.platform !== 'win32') return false

	try {
		const { stderr: err1 } = await exec('fsutil dirty query %systemdrive%');
		if (err1) {
			const { stderr: err2 } = await exec('fltmc')
			return !err2
		} else {
			return true
		}
	} catch (e) {
		return false
	}
}

export function checkLinuxOrMacSudo() {
	if (process.platform === 'win32') return false
	return process.getuid && process.getuid() === 0;
}

export async function checkSudo() {
	return checkLinuxOrMacSudo() || checkWindowsSudo()
}