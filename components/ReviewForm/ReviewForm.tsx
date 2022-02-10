import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import { Input,Button, Rating, Textarea } from '..';
import {RiCloseFill} from 'react-icons/ri'
import { useForm, Controller } from 'react-hook-form';
import { IReviewForm, IReviewSentResponse } from './ReviewForm.interface';
import axios from 'axios'
import {API} from '../../helpers/api'
import {useState} from 'react'

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {

	const {register, control,handleSubmit, formState: {errors}, reset} = useForm<IReviewForm>()
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [error,setError] = useState<string>()

	const onSubmit = async (formData: IReviewForm) => {
		try{
			const {data} = await axios.post<IReviewSentResponse>(API.review.createDemo, {...formData, productId })		
			if(data.message){
				setIsSuccess(true)
				reset()
			}
			else{
				setError('Что то пошло не так')
			}
		}		
		catch (e){
			setError(e.message)
		}
	}

	return (
			<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(styles.reviewForm, className)}
				{...props}
			>
				<Input
					{...register('name', { required: { value: true, message: 'Заполните имя' } })}
					placeholder='Имя'
					error={errors.name}
					aria-invalid={errors.name ? true : false}
				/>
				<Input
					{...register('title', { required: { value: true, message: 'Заполните заголовок' } })}
					placeholder='Заголовок отзыва'
					className={styles.title}
					error={errors.title}
					aria-invalid={errors.title ? true : false}
				/>
				<div className={styles.rating}>
					<span>Оценка:</span>
					<Controller
						control={control}
						name='rating'
						rules={{ required: { value: true, message: `Укажите рейтинг`} }}
						render={({ field }) => (
							<Rating
								isEditable
								rating={field.value}
								ref={field.ref}
								setRating={field.onChange}
								error={errors.rating}
							/>
						)}
					/>
				</div>
				<Textarea
					{...register('description', { required: { value: true, message: 'Заполните описание' } })}
					placeholder='Текст отзыва'
					className={styles.description}
					error={errors.description}
				/>
				<div className={styles.submit}>
					<Button appearance="primary" >Отправить</Button>
					<span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
				</div>
			</div>
			{isSuccess && <div className={cn(styles.success, styles.panel)} role="alert">
				<div className={styles.successTitle}>Ваш отзыв отправлен</div>
				<div>
					Спасибо, ваш отзыв будет опубликован после проверки.
				</div>
				<button
					className={styles.close}
					aria-label="Закрыть оповещение"
				>
					<RiCloseFill onClick={() => setIsSuccess(false)}/>
				</button>
			</div>}
			{error && <div className={cn(styles.error, styles.panel)} role="alert">
				Что-то пошло не так, попробуйте обновить страницу
				<button
					className={styles.close}
					aria-label="Закрыть оповещение"
				>
					<RiCloseFill onClick={() => setError(undefined)}/>
				</button>
			</div>}
		</form>
	);
};