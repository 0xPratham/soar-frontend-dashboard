'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Suspense, useRef, useState } from 'react';
import Image from 'next/image';
import LoginUserAvatar from '../../../public/img/avatar/user-avatar.png';
import { Pencil } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { editProfileSchema } from '@/lib/schema';
import { useToast } from '@/hooks/use-toast';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import ReactCrop, {
    centerCrop,
    makeAspectCrop,
    type Crop,
} from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

type FormValues = {
    name: string;
    email: string;
    dob: string;
    permanentAddress: string;
    postal: string;
    username: string;
    password: string;
    presentAddress: string;
    city: string;
    country: string;
};

const EditProfile = () => {
    const { toast } = useToast();
    const [image, setImage] = useState<string>();
    const [tempImageSrc, setTempImageSrc] = useState<string>();
    const [crop, setCrop] = useState<Crop>();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleEditProfilePictureButton = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setTempImageSrc(reader.result?.toString());
            };
            reader.readAsDataURL(file);
            setIsDialogOpen(true);
        }
    };

    const onImageLoaded = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const { width, height } = e.currentTarget;
        const cropWidthInPercent = (150 / width) * 100;
        const crop = makeAspectCrop(
            {
                unit: '%',
                width: cropWidthInPercent,
            },
            1,
            width,
            height
        );
        const centeredCrop = centerCrop(crop, width, height);
        setCrop(centeredCrop);
    };

    const handleCrop = () => {
        if (tempImageSrc && crop?.width && crop?.height) {
            const imageElement = new window.Image();
            imageElement.src = tempImageSrc;

            imageElement.onload = () => {
                const canvas = document.createElement('canvas');
                const scaleX = imageElement.width / 100;
                const scaleY = imageElement.height / 100;

                canvas.width = (crop.width * scaleX) | 0;
                canvas.height = (crop.height * scaleY) | 0;

                const ctx = canvas.getContext('2d');
                if (!ctx) return;

                ctx.drawImage(
                    imageElement,
                    crop.x * scaleX,
                    crop.y * scaleY,
                    crop.width * scaleX,
                    crop.height * scaleY,
                    0,
                    0,
                    canvas.width,
                    canvas.height
                );

                const croppedDataUri = canvas.toDataURL('image/png');
                setImage(croppedDataUri);
                setIsDialogOpen(false);
            };
        }
    };

    const form = useForm<FormValues>({
        resolver: yupResolver(editProfileSchema),
        defaultValues: {
            name: '',
            email: '',
            dob: '1990-01-25',
            permanentAddress: '',
            username: '',
            password: '',
            presentAddress: '',
            city: '',
            country: '',
        },
    });

    const { isSubmitting } = form.formState;
    const onSubmit = async (data: FormValues) => {
        console.log(data);
        toast({
            title: 'Profile updated',
            description: 'Your profile has been updated successfully',
        });
    };

    return (
        <div className='md:grid gap-8 md:grid-cols-[auto_1fr] flex flex-col md:items-start items-center'>
            <div className='relative w-40 h-40'>
                <Avatar className='w-40 h-40'>
                    <Suspense fallback={<AvatarFallback>UA</AvatarFallback>}>
                        <Image
                            src={image ? image : LoginUserAvatar}
                            alt='Profile picture'
                            fill
                        />
                    </Suspense>
                </Avatar>
                <button
                    onClick={handleEditProfilePictureButton}
                    type='button'
                    className='absolute bottom-2 right-2 p-1.5 bg-white border rounded-full shadow-sm'
                >
                    <input
                        type='file'
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        accept='image/png, image/jpg, image/jpeg'
                        onChange={handleFileChange}
                    />

                    <Pencil className='w-4 h-4' />
                </button>
            </div>
            <div className='w-full'>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='p-2'
                    >
                        <div className='grid gap-6 md:grid-cols-2'>
                            <div className='space-y-4'>
                                <div className='space-y-2'>
                                    <FormField
                                        control={form.control}
                                        disabled={isSubmitting}
                                        name='name'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel
                                                    htmlFor='name'
                                                    className='font-normal'
                                                >
                                                    Your Name
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        id='name'
                                                        className='bg-gray-50 placeholder:text-[#718EBF]'
                                                        placeholder='Charlene Reed'
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className='space-y-2'>
                                    <FormField
                                        control={form.control}
                                        disabled={isSubmitting}
                                        name='email'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel
                                                    htmlFor='email'
                                                    className='font-normal'
                                                >
                                                    Email
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        id='email'
                                                        className='bg-gray-50 placeholder:text-[#718EBF]'
                                                        placeholder='charlenereed@gmail.com'
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className='space-y-2'>
                                    <FormField
                                        control={form.control}
                                        disabled={isSubmitting}
                                        name='dob'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel
                                                    htmlFor='dob'
                                                    className='font-normal'
                                                >
                                                    Date of Birth
                                                </FormLabel>
                                                <Select
                                                    onValueChange={
                                                        field.onChange
                                                    }
                                                    defaultValue={field.value}
                                                >
                                                    <FormControl>
                                                        <SelectTrigger id='dob'>
                                                            <SelectValue placeholder='Select date' />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value='1990-01-25'>
                                                            25 January 1990
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className='space-y-2'>
                                    <FormField
                                        control={form.control}
                                        disabled={isSubmitting}
                                        name='permanentAddress'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel
                                                    htmlFor='permanentAddress'
                                                    className='font-normal'
                                                >
                                                    Permanent Address
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        id='permanentAddress'
                                                        className='bg-gray-50 placeholder:text-[#718EBF]'
                                                        placeholder='San Jose, California, USA'
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className='space-y-2'>
                                    <FormField
                                        control={form.control}
                                        disabled={isSubmitting}
                                        name='postal'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel
                                                    htmlFor='postal'
                                                    className='font-normal'
                                                >
                                                    Postal Code
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        id='postal'
                                                        className='bg-gray-50 placeholder:text-[#718EBF]'
                                                        placeholder='45962'
                                                        type='number'
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                            <div className='space-y-4'>
                                <div className='space-y-2'>
                                    <FormField
                                        control={form.control}
                                        disabled={isSubmitting}
                                        name='username'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel
                                                    htmlFor='username'
                                                    className='font-normal'
                                                >
                                                    User Name
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        id='username'
                                                        className='bg-gray-50 placeholder:text-[#718EBF]'
                                                        placeholder='Charlene Reed'
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className='space-y-2'>
                                    <FormField
                                        control={form.control}
                                        disabled={isSubmitting}
                                        name='password'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel
                                                    htmlFor='password'
                                                    className='font-normal'
                                                >
                                                    Password
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        id='password'
                                                        className='bg-gray-50 placeholder:text-[#718EBF]'
                                                        placeholder='**********'
                                                        type='password'
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className='space-y-2'>
                                    <FormField
                                        control={form.control}
                                        disabled={isSubmitting}
                                        name='presentAddress'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel
                                                    htmlFor='presentAddress'
                                                    className='font-normal'
                                                >
                                                    Present Address
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        id='presentAddress'
                                                        className='bg-gray-50 placeholder:text-[#718EBF]'
                                                        placeholder='San Jose, California, USA'
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className='space-y-2'>
                                    <FormField
                                        control={form.control}
                                        disabled={isSubmitting}
                                        name='city'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel
                                                    htmlFor='city'
                                                    className='font-normal'
                                                >
                                                    City
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        id='city'
                                                        className='bg-gray-50 placeholder:text-[#718EBF]'
                                                        placeholder='San Jose'
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className='space-y-2'>
                                    <FormField
                                        control={form.control}
                                        disabled={isSubmitting}
                                        name='country'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel
                                                    htmlFor='country'
                                                    className='font-normal'
                                                >
                                                    Country
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        id='country'
                                                        className='bg-gray-50 placeholder:text-[#718EBF]'
                                                        placeholder='USA'
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-end mt-6'>
                            <Button
                                type='submit'
                                size='lg'
                                className='bg-gray-900 text-white hover:bg-gray-800 rounded-xl md:w-[190px] w-full'
                            >
                                Save
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit Profile Picture</DialogTitle>
                    </DialogHeader>
                    <div className='flex flex-col items-center justify-center !my-4'>
                        <ReactCrop
                            crop={crop}
                            circularCrop
                            keepSelection
                            aspect={1}
                            minWidth={150}
                            onChange={(pixelCrop, percentCrop) => {
                                if (percentCrop) {
                                    setCrop(percentCrop);
                                }
                            }}
                        >
                            <img
                                src={tempImageSrc}
                                alt='Profile picture'
                                style={{ maxHeight: '70vh' }}
                                onLoad={onImageLoaded}
                            />
                        </ReactCrop>
                    </div>
                    <DialogFooter>
                        <Button type='button' onClick={handleCrop}>
                            Crop
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default EditProfile;
