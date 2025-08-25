import { Control, Controller, useWatch } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

interface DateRangePickerFieldProps {
  control: Control<any>
  firstDate: string
  lastDate: string
  firstDateError?: string
  lastDateError?: string
}

export default function DateRangePickerField({
  control,
  firstDate,
  lastDate,
  firstDateError,
  lastDateError,
}: DateRangePickerFieldProps) {
  const now = new Date()

  // useWatch로 startDate 값을 실시간 감시
  const startDateValue = useWatch({
    control,
    name: firstDate,
  }) as Date | null

  // 유틸 함수: 두 날짜가 같은 날인지 체크
  function isSameDay(date1: Date, date2: Date) {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    )
  }

  // 유틸 함수: 특정 시/분으로 Date 세팅 (날짜는 오늘 기준)
  function setTime(hours: number, minutes: number) {
    const date = new Date()
    date.setHours(hours, minutes, 0, 0)
    return date
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-5">
        <span className="p-5 md:h-max text-2xl font-semibold border border-[var(--color-2)] rounded-2xl">
          날짜/시간
        </span>
        <div className="flex gap-4 flex-1 items-center md:flex-row flex-col">
          {/* 시작일 */}
          <Controller
            name={firstDate}
            control={control}
            rules={{ required: '시작일을 선택해주세요.' }}
            render={({ field }) => (
              <DatePicker
                placeholderText="시작일을 선택해주세요."
                selected={field.value ?? null}
                onChange={field.onChange}
                showTimeSelect
                timeFormat="hh:mm aa"
                timeIntervals={15}
                dateFormat="yyyy.MM.dd aah:mm"
                wrapperClassName="flex-1"
                className="w-full border border-[var(--color-2)] px-4 py-2 rounded-xl"
                minDate={now}
                minTime={
                  field.value && isSameDay(field.value, now)
                    ? now
                    : setTime(0, 0)
                }
                maxTime={setTime(23, 59)}
              />
            )}
          />

          <span className="mx-2 md:block hidden">~</span>

          {/* 종료일 */}
          <Controller
            name={lastDate}
            control={control}
            rules={{ required: '종료일을 선택해주세요.' }}
            render={({ field }) => (
              <DatePicker
                placeholderText="종료일을 선택해주세요."
                selected={field.value ?? null}
                onChange={field.onChange}
                showTimeSelect
                timeFormat="hh:mm aa"
                timeIntervals={15}
                dateFormat="yyyy.MM.dd aah:mm"
                wrapperClassName="flex-1"
                className="w-full border border-[var(--color-2)] px-4 py-2 rounded-xl"
                minDate={startDateValue || now}
                minTime={
                  field.value &&
                  startDateValue &&
                  isSameDay(field.value, startDateValue)
                    ? startDateValue
                    : setTime(0, 0)
                }
                maxTime={setTime(23, 59)}
              />
            )}
          />
        </div>
      </div>

      {(firstDateError || lastDateError) && (
        <div className="text-red-500 text-sm flex gap-4 pl-[8rem]">
          {firstDateError && <p>{firstDateError}</p>}
          {lastDateError && <p>{lastDateError}</p>}
        </div>
      )}
    </div>
  )
}
