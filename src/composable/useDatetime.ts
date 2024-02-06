import { computed } from "vue"
import { DateTime } from 'luxon';

export function useDateTime() {

  const isoToDate = computed(() => (value: string): string => {
    return DateTime.fromISO(value).toFormat('dd/LL/yyyy');
  })

  const isoToTime = computed(() => (value: string): string => {
    return DateTime.fromISO(value).toFormat('HH:mm:ss');
  })

  const isoToDateTime = computed(() => (value: string): string => {
    return DateTime.fromISO(value).toFormat('dd / LL / yyyy - HH:mm น.');
  })
  

  return {
    isoToDate,
    isoToTime,
    isoToDateTime
  }
}